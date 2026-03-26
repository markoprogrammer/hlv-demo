#!/usr/bin/env python3
"""
Estimate total Claude Code API spend from local session files.
Usage: python3 scripts/cost.py
"""

import json
import glob
import os

# Pricing per million tokens (Anthropic published rates)
PRICING = {
    'claude-opus-4-6':       {'input': 15.0,  'output': 75.0,  'cache_write': 18.75, 'cache_read': 1.50},
    'claude-sonnet-4-6':     {'input': 3.0,   'output': 15.0,  'cache_write': 3.75,  'cache_read': 0.30},
    'claude-sonnet-4-5':     {'input': 3.0,   'output': 15.0,  'cache_write': 3.75,  'cache_read': 0.30},
    'claude-haiku-4-5':      {'input': 0.80,  'output': 4.0,   'cache_write': 1.0,   'cache_read': 0.08},
}


def get_pricing(model: str):
    for key, price in PRICING.items():
        if key in model:
            return price
    return None


def calc_cost(model: str, usage: dict) -> float:
    p = get_pricing(model)
    if not p:
        return 0.0
    i  = usage.get('input_tokens', 0)
    o  = usage.get('output_tokens', 0)
    cw = usage.get('cache_creation_input_tokens', 0)
    cr = usage.get('cache_read_input_tokens', 0)
    return (i * p['input'] + o * p['output'] + cw * p['cache_write'] + cr * p['cache_read']) / 1_000_000


def main():
    session_files = glob.glob(os.path.expanduser('~/.claude/projects/*/*.jsonl'))

    total = 0.0
    by_model: dict[str, float] = {}
    by_project: dict[str, float] = {}
    sessions = 0

    for fpath in session_files:
        project = os.path.basename(os.path.dirname(fpath))
        session_cost = 0.0

        try:
            with open(fpath) as f:
                for line in f:
                    try:
                        obj = json.loads(line)
                        if obj.get('type') != 'assistant':
                            continue
                        msg = obj.get('message', {})
                        model = msg.get('model', '')
                        usage = msg.get('usage', {})
                        if usage and model:
                            c = calc_cost(model, usage)
                            session_cost += c
                            by_model[model] = by_model.get(model, 0.0) + c
                    except (json.JSONDecodeError, KeyError):
                        pass
        except OSError:
            pass

        if session_cost > 0:
            sessions += 1
            total += session_cost
            by_project[project] = by_project.get(project, 0.0) + session_cost

    print(f"\n{'─' * 50}")
    print(f"  Claude Code — estimated API spend")
    print(f"{'─' * 50}")
    print(f"  Sessions:     {sessions}")
    print(f"  Total cost:   ${total:.4f}")
    print(f"\n  By model:")
    for model, cost in sorted(by_model.items(), key=lambda x: -x[1]):
        if cost > 0:
            print(f"    {model:<35} ${cost:.4f}")
    print(f"\n  By project:")
    for project, cost in sorted(by_project.items(), key=lambda x: -x[1]):
        label = project.replace('-Users-markomanojlovic-', '~/').replace('-Users-markomanojlovic', '~')
        print(f"    {label:<35} ${cost:.4f}")
    print(f"{'─' * 50}")
    print(f"  Note: estimates only — see console.anthropic.com for exact billing.")
    print()


if __name__ == '__main__':
    main()

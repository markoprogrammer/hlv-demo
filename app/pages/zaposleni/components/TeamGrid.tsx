interface TeamMember {
  name: string
  role: string
  photo: string
}

const team: TeamMember[] = [
  { name: 'Predrag Spasojević', role: 'Gazda', photo: 'https://hooloovoo.rs/wp-content/uploads/2017/06/014_.png' },
  { name: 'Dubravka Trišić', role: 'Deputy CEO', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/12/Dubravka-Trisic.jpg' },
  { name: 'Luka Obradović', role: 'Vice President of AI', photo: 'https://hooloovoo.rs/wp-content/uploads/2018/10/Luka-Obradovic.png' },
  { name: 'Nenad Janković', role: 'Chief Delivery Officer', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/12/Nenad-Jankovic.jpg' },
  { name: 'Nikola Vrgović', role: 'Chief Business Development Officer', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/01/Vrga.jpg' },
  { name: 'Marko Vukadinović', role: 'Chief Operations Officer', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/10/Marko_Vukadinovic.jpg' },
  { name: 'Marko Manojlović', role: 'Senior Javascript Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/08/Marko_Manojlovic.jpg' },
  { name: 'Ivana Savin', role: 'Senior Java Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2022/04/Ivana-Savin.jpg' },
  { name: 'Dragan Stanković', role: 'Senior JavaScript Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2020/07/Dragan-Stankovic.jpg' },
  { name: 'Vladimir Roljić', role: 'Senior Big Data Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/10/Roljic.jpg' },
  { name: 'Nenad Čolović', role: 'Senior Java Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2017/06/019_.png' },
  { name: 'Marina Maljković', role: 'Senior JavaScript Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2017/06/012_.png' },
  { name: 'Miloš Denić', role: 'Senior Java Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/08/Milos_Denic.jpg' },
  { name: 'Lazar Matović', role: 'Senior Java Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/04/Lazar_Matovic.jpg' },
  { name: 'Miloš Knežević', role: 'Senior DevOps', photo: 'https://hooloovoo.rs/wp-content/uploads/2017/06/004_.png' },
  { name: 'Jovana Stanojković', role: 'Medior Fullstack Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/12/Jovana_Djuric.jpg' },
  { name: 'Marko Stanković', role: 'Software Architect', photo: 'https://hooloovoo.rs/wp-content/uploads/2017/06/marko-stankovic.jpg' },
  { name: 'Aleksandar Ilić', role: 'Software Architect', photo: 'https://hooloovoo.rs/wp-content/uploads/2022/09/Aleksandar-Ilic.jpg' },
  { name: 'Srđan Rogić', role: 'Solution Architect', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/08/Srdjan_Rogic.jpg' },
  { name: 'Milena Gojković', role: 'Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2025/02/Milena-Gojkovic-2.png' },
  { name: 'Jelena-Marina Omerović', role: 'Senior Java Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/04/Jelena_Marina_Bradaric.jpg' },
  { name: 'Igor Mikić', role: 'Senior Java Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/08/Igor_Mikic.jpg' },
  { name: 'Goran Nenadić', role: 'Senior Android Developer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2022/09/Goran-Nenadic.jpg' },
  { name: 'Milić Vulikić', role: 'Senior Test Engineer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/10/Milic-Vulikic.jpg' },
  { name: 'Miro Abaz', role: 'Senior Test Engineer / Team Leader', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/03/Miro-Abaz.jpg' },
  { name: 'Aleksandar Popović', role: 'Senior Big Data Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2018/10/Aleksandar-Popovic.png' },
  { name: 'Ivan Todorović', role: 'Senior Big Data Developer', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/10/Ivan-Todorovic.jpg' },
  { name: 'Žarko Vulikić', role: 'Senior Quant Data Engineer', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/10/Zarko_Vulikic.jpg' },
  { name: 'Kristina Radovanović', role: 'Product Designer', photo: 'https://hooloovoo.rs/wp-content/uploads/2020/11/kristina-radovanovic.png' },
  { name: 'Nemanja Spasić', role: 'Product Designer', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/12/Nemanja_Spasic.jpg' },
  { name: 'Nataša Dogandžić', role: 'Head of Brand', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/04/Natasa-Dogandzic.jpg' },
  { name: 'Marko Rajić', role: 'Art Director', photo: 'https://hooloovoo.rs/wp-content/uploads/2019/01/MarkoR.jpg' },
  { name: 'Tijana Branković', role: 'Head of Talent Marketing', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/04/Tijana-Brankovic.jpg' },
  { name: 'Jana Đorđević', role: 'Organizational Development Manager', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/08/Jana_Djordjevic.jpg' },
  { name: 'Ljubiša Milićević', role: 'Head of Finance', photo: 'https://hooloovoo.rs/wp-content/uploads/2023/12/Ljubisa-Milicevic.jpg' },
  { name: 'Dubravka Dražić', role: 'Operations Manager', photo: 'https://hooloovoo.rs/wp-content/uploads/2021/11/Duca2.jpg' },
]

interface MemberCardProps {
  member: TeamMember
}

function MemberCard({ member }: MemberCardProps) {
  return (
    <div className="bg-[#1a1a1a]/80 rounded-2xl overflow-hidden hover:border hover:border-[#4fc273]/30 transition-all group">
      <div className="aspect-square overflow-hidden bg-[#111]">
        <img
          src={member.photo}
          alt={member.name}
          loading="lazy"
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
        />
      </div>
      <div className="p-4">
        <p className="text-white font-medium text-sm">{member.name}</p>
        <p className="text-[#4fc273]/70 text-xs mt-0.5">{member.role}</p>
      </div>
    </div>
  )
}

export default function TeamGrid() {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {team.map((member) => (
            <MemberCard key={member.name} member={member} />
          ))}
          <div className="bg-[#1a1a1a]/40 border border-dashed border-white/10 rounded-2xl aspect-square flex items-center justify-center">
            <p className="text-white/30 text-xs text-center px-2">
              +130 sjajnih<br />kolega
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default function ProjectCard({ title, description, category, techs, githubUrl }) {
  return (
    <div className="flex flex-col gap-4 p-10 bg-[#0A1628] border border-[#1E3A5F] rounded-xl">
      
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold px-3 py-1 bg-[#001A42] text-[#4D8EFF] border border-[#004395] rounded-md">
          {category}
        </span>
        <a href={githubUrl} target="_blank" className="text-xs text-[#CBD5E1] hover:text-[#4D8EFF] transition-colors">
          GitHub ↗
        </a>
      </div>

      <div className="flex flex-col gap-2">
        <h3 className="font-space text-xl font-bold text-white">{title}</h3>
        <p className="text-sm text-[#CBD5E1] leading-relaxed">{description}</p>
      </div>

      <div className="flex flex-col gap-4 pt-6 border-t border-[#1E3A5F]">
        <p className="text-xs text-[#4D8EFF] tracking-widest uppercase">Tecnologias</p>
        <div className="flex flex-wrap gap-2 items-center justify-center">
          {techs.map(tech => (
            <span key={tech} className="text-xs px-2 py-1 bg-[#001A42] text-[#CBD5E1] border border-[#1E3A5F] rounded-md">
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}
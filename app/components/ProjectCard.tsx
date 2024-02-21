'use client'
import uniqid from "uniqid";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface projectType {
  thumbnail: string;
  name: string;
  description: string[];
  stack: string[];
  sourceCode: string;
}

function ProjectCard (project:projectType ){

  const router  = useRouter()

  const createQueryString = (name:string, nameValue:string) => {
    const params = new URLSearchParams();
    params.set(name, nameValue);

    return params.toString();
  };


  return (
    <div className="project">
      <div>
        {project.thumbnail && (
          <Image
            className="project__thumbnail"
            src={project.thumbnail}
            alt="thumbnail"
            width={100}
            height={100}
            onClick={()=>{
              router.push("/ProjectDetail" + "?" + createQueryString("name",project.name))
            }}
          />
        )}

        {project.name && <h3 onClick={() => {
          router.push("/ProjectDetail" + "?" + createQueryString("name",project.name))
        }}>{project.name}</h3>}

        {project.description && (
          <div className="project__description paragraph__list">
            {project.description.map((item:string) => (
              <p key={uniqid()} >{item}</p>
            ))}
          </div>
        )}
      </div>

      <div>
        {project.stack && (
          <ul className="project__stack">
            {project.stack.map((item:string) => (
              <li key={uniqid()} className="project__stack-item">
                {item}
              </li>
            ))}
          </ul>
        )}

        {project.sourceCode && (
          <a
            href={project.sourceCode}
            target="_blank"
            rel="noreferrer"
            aria-label="source code"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
        )}
      </div>
    </div>
)};

export default ProjectCard;

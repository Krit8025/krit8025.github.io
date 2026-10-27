export interface Project {
  slug: string;
  name: string;
  title: string;
  description: string;
  repoUrl: string;
  defaultBranch: string;
  readmeFile: string;
  coverImage: string;
  tag: string;
}

export const PROJECTS: Project[] = [
  {
    slug: "Nozzle-Shape-Optimization---2D",
    name: "Nozzle-Shape-Optimization---2D",
    title: "2D Supersonic Nozzle Shape Optimization",
    description:
      "Method of Characteristics (MOC) solver for nozzle contour optimization in supersonic flows using a gradient-free method with flowfield simulation.",
    repoUrl: "https://github.com/Krit8025/Nozzle-Shape-Optimization---2D",
    defaultBranch: "master",
    readmeFile: "README.md",
    coverImage:
      "https://raw.githubusercontent.com/Krit8025/Nozzle-Shape-Optimization---2D/master/anderson_moc_solver/flowfield_mach.png",
    tag: "Personal Project",
  },
  {
    slug: "Physics-informed-Gearbox-Fault-Diagnosis",
    name: "Physics-informed-Gearbox-Fault-Diagnosis",
    title: "Physics-Informed Gearbox Fault Diagnosis",
    description:
      "Fault diagnosis framework to classify mechanical faults in bearing and gear components of a 3-stage gearbox for wind turbine applications.",
    repoUrl: "https://github.com/Krit8025/Physics-informed-Gearbox-Fault-Diagnosis",
    defaultBranch: "main",
    readmeFile: "Readme.md",
    coverImage:
      "https://raw.githubusercontent.com/Krit8025/Physics-informed-Gearbox-Fault-Diagnosis/main/images/confusion_matrices_comparison.png",
    tag: "BITS Hyderabad Research Project",
  },
  {
    slug: "BEMT-Shrouded-Propellers",
    name: "BEMT-Shrouded-Propellers",
    title: "BEMT for Shrouded Propellers",
    description:
      "Blade Element Momentum Theory implementation incorporating aerodynamic shroud modifications and analytical models to study propeller thrust performance.",
    repoUrl: "https://github.com/Krit8025/BEMT-Shrouded-Propellers",
    defaultBranch: "main",
    readmeFile: "README.md",
    coverImage:
      "https://raw.githubusercontent.com/Krit8025/BEMT-Shrouded-Propellers/main/figure10.png",
    tag: "IIT Hyderabad Research Internship",
  },
  {
    slug: "Baja-ATV-Steering-Knuckle",
    name: "Baja-ATV-Steering-Knuckle",
    title: "Baja eATV Steering Knuckle Design & Fabrication",
    description:
      "Design, FEA stress analysis, and CNC fabrication documentation of a front suspension steering knuckle for Team Vulcan's Baja SAE eATV.",
    repoUrl: "https://github.com/Krit8025/Baja-ATV-Steering-Knuckle",
    defaultBranch: "main",
    readmeFile: "Readme.md",
    coverImage:
      "https://raw.githubusercontent.com/Krit8025/Baja-ATV-Steering-Knuckle/main/images/cad-knuckle.png",
    tag: "SAE Baja",
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find(
    (p) => p.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );
}

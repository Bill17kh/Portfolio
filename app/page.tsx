import { Briefcase, GraduationCap, Code, Award, User, Mail, Phone, Github, Linkedin, MapPin } from "lucide-react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-md transition-all duration-300 hover:shadow-lg">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="w-48 h-48 relative rounded-full overflow-hidden border-4 border-gray-100 shadow-md">
              <Image
                src="/images/profile.jpg"
                alt="Bilal El Khantouri"
                fill
                className="object-cover object-[center_top]"
                priority
              />
            </div>
            <div className="text-center md:text-left">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Bilal El Khantouri</h1>
              <p className="mt-2 text-xl text-gray-600">Full Stack Developer & DevOps Engineer</p>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors duration-300">
                  Cloud Computing
                </Badge>
                <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200 transition-colors duration-300">
                  DevOps
                </Badge>
                <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-200 transition-colors duration-300">
                  Full Stack
                </Badge>
              </div>
              <div className="mt-6 flex flex-wrap gap-3 justify-center md:justify-start">
                <Button
                  asChild
                  className="bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://github.com/Bill17kh" target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-blue-700 hover:bg-blue-800 text-white transition-all duration-300 transform hover:scale-105"
                >
                  <a href="https://linkedin.com/in/bilal-el-khantouri" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="mr-2 h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <User className="h-5 w-5" /> About Me
          </h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-gray-700 leading-relaxed">
              Étudiant en quatrième année d'ingénierie informatique à l'EMSI, je suis un développeur Full Stack
              spécialisé en DevOps et infrastructures cloud, passionné par l'automatisation des déploiements,
              l'intégration continue et les environnements cloud hybrides. Je suis prêt à contribuer efficacement à
              votre entreprise et à relever de nouveaux défis technologiques.
            </p>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-500" />
                <a href="mailto:elkhantouri.bl@gmail.com" className="text-gray-700 hover:text-gray-900">
                  elkhantouri.bl@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-gray-500" />
                <a href="tel:+212694289052" className="text-gray-700 hover:text-gray-900">
                  +212 694 289 052
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Github className="h-5 w-5 text-gray-500" />
                <a
                  href="https://github.com/Bill17kh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  github.com/Bill17kh
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Linkedin className="h-5 w-5 text-gray-500" />
                <a
                  href="https://linkedin.com/in/bilal-el-khantouri"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-700 hover:text-gray-900"
                >
                  linkedin.com/in/bilal-el-khantouri
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-gray-500" />
                <span className="text-gray-700">Marrakech, Morocco</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <Code className="h-5 w-5" /> Compétences Techniques
          </h2>

          <Tabs defaultValue="languages" className="max-w-3xl mx-auto">
            <TabsList className="grid grid-cols-2 md:grid-cols-6 mb-8 bg-blue-50">
              <TabsTrigger value="languages">Langages</TabsTrigger>
              <TabsTrigger value="devops">DevOps</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & Infra</TabsTrigger>
              <TabsTrigger value="data">Big Data</TabsTrigger>
              <TabsTrigger value="db">Bases de données</TabsTrigger>
              <TabsTrigger value="datascience">Data Science</TabsTrigger>
            </TabsList>

            <TabsContent value="languages" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Python", "Java", "PHP", "C++", "JavaScript", "Bash", "Flutter", "Dart"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="devops" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Docker", "Kubernetes", "CI/CD", "Scrum", "Agile"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["OpenStack", "Azure", "Virtualisation", "Cloud local"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["Apache Hadoop", "Apache Spark"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="db" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {["MySQL", "SQL Server"].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="datascience" className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Data Visualization",
                  "Machine Learning",
                  "Pandas",
                  "Matplotlib",
                  "Seaborn",
                  "XGBoost",
                  "Data Preprocessing",
                  "EDA",
                  "AI Ethics",
                ].map((skill) => (
                  <div
                    key={skill}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-200 transition-all duration-300 hover:shadow-md hover:border-blue-300 hover:bg-blue-50 transform hover:-translate-y-1"
                  >
                    <span className="font-medium">{skill}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <Briefcase className="h-5 w-5" /> Expériences Professionnelles
          </h2>

          <div className="max-w-3xl mx-auto space-y-8">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>REMCE SARL | Application de Suivi de Présence</CardTitle>
                    <CardDescription>Développement d'une Application de Gestion des Présences</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Juillet 2024 - Aout 2024
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Mise en place d'un pipeline DevOps pour la livraison continue.</li>
                  <li>Conception et développement avec Python (Tkinter) et MySQL.</li>
                  <li>Génération automatique de rapports CSV.</li>
                  <li>Collaboration agile avec reporting quotidien.</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>CRSA - UM6P | Projet DevOps & Cloud</CardTitle>
                    <CardDescription>Installation et Déploiement d'un cloud local avec OpenStack</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    Décembre 2022 - Février 2023
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2 text-gray-700">
                  <li>Préparation et déploiement d'un cloud local avec OpenStack.</li>
                  <li>Automatisation des tâches avec des scripts Bash.</li>
                  <li>Migration d'instances virtuelles, configuration réseau.</li>
                  <li>Suivi en mode Scrum, avec des revues hebdomadaires.</li>
                  <li>Environnement : Linux, OpenStack, SSH, Cloud privé, VM.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <GraduationCap className="h-5 w-5" /> Formations
          </h2>

          <div className="max-w-3xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>Cycle d'ingénierie en Informatique et Réseaux</CardTitle>
                    <CardDescription>EMSI - MARRAKECH</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2023 - En Cours
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>Diplôme de Technicien Spécialisé en Cloud Computing</CardTitle>
                    <CardDescription>ISTA SYBA - MARRAKECH</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2021 - 2023
                  </Badge>
                </div>
              </CardHeader>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                  <div>
                    <CardTitle>Baccalauréat en Sciences Physiques</CardTitle>
                    <CardDescription>Lycée Sidi Abderrahman - MARRAKECH</CardDescription>
                  </div>
                  <Badge variant="outline" className="w-fit">
                    2019 - 2020
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <Code className="h-5 w-5" /> Projets Personnels
          </h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>FaceSmart</CardTitle>
                <CardDescription>Application de gestion des employés (P.F.A)</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développé avec Python (Tkinter, dlib, OpenCV). Application de reconnaissance faciale pour la gestion
                  des employés.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">Tkinter</Badge>
                  <Badge variant="secondary">OpenCV</Badge>
                  <Badge variant="secondary">dlib</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>UML Generate</CardTitle>
                <CardDescription>Éditeur UML en ligne avec auto-Save</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développé avec React et JavaScript. Permet de créer et éditer des diagrammes UML en ligne avec
                  sauvegarde automatique.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">React</Badge>
                  <Badge variant="secondary">JavaScript</Badge>
                  <Badge variant="secondary">UML</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Store Shop</CardTitle>
                <CardDescription>Plateforme e-commerce responsive</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développé avec PHP et MySQL. Site e-commerce responsive avec gestion des produits, panier et
                  commandes.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">PHP</Badge>
                  <Badge variant="secondary">MySQL</Badge>
                  <Badge variant="secondary">Responsive</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Gestion de réservation</CardTitle>
                <CardDescription>Application desktop avec recherche dynamique</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développé avec Java et JDBC. Application de bureau pour la gestion des réservations avec
                  fonctionnalité de recherche dynamique.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Java</Badge>
                  <Badge variant="secondary">JDBC</Badge>
                  <Badge variant="secondary">Desktop</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="h-full transition-all duration-300 hover:shadow-lg hover:border-blue-300 transform hover:-translate-y-1">
              <CardHeader>
                <CardTitle>Location de voitures</CardTitle>
                <CardDescription>API REST avec Laravel</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Développé avec Laravel. API REST pour la gestion de location de voitures avec CRUD, authentification
                  et gestion des utilisateurs.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Badge variant="secondary">Laravel</Badge>
                  <Badge variant="secondary">API REST</Badge>
                  <Badge variant="secondary">CRUD</Badge>
                  <Badge variant="secondary">Auth</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2 text-blue-700 relative pb-3 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-1 after:bg-blue-500 after:rounded-full">
            <Award className="h-5 w-5" /> Licences et Certifications
          </h2>

          <div className="max-w-3xl mx-auto">
            <Card>
              <CardContent className="pt-6">
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">
                        Flutter et Dart : Développer des applications iOS, Android et mobiles
                      </p>
                      <p className="text-sm text-gray-600">IBM • Avril 2025 • Identifiant: 5EE5DWABYNW5</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Introduction au Cloud Computing</p>
                      <p className="text-sm text-gray-600">IBM • Mars 2025 • Identifiant: Y16T24KYHBLI</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Introduction aux conteneurs avec Docker, Kubernetes et OpenShift</p>
                      <p className="text-sm text-gray-600">IBM • Mars 2025 • Identifiant: VF31FEWKOHCG</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Virtualization 101 (HOL-2535-01-VCF-L)</p>
                      <p className="text-sm text-gray-600">Microsoft Azure • Mars 2025</p>
                      <p className="text-sm text-gray-600">Compétences: vSphere, vCenter, Virtualisation</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Introduction à Java et à la programmation orientée objet</p>
                      <p className="text-sm text-gray-600">
                        University of Pennsylvania • Novembre 2024 • Identifiant: E4JM63M2SJ37
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Les bases de React</p>
                      <p className="text-sm text-gray-600">Meta • Novembre 2024 • Identifiant: 820CP398FD03</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Introduction aux orchestrateurs OpenStack et Kubernetes</p>
                      <p className="text-sm text-gray-600">
                        Juniper Networks • Juillet 2024 • Identifiant: 2K8USEK5P3RT
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Data Visualization</p>
                      <p className="text-sm text-gray-600">Kaggle • Mai 2024</p>
                      <p className="text-sm text-gray-600">
                        Compétences: Data Visualization, Heatmaps, Analytical Thinking, Analytical Skills, Visualisation
                        de données, Python (Seaborn, Matplotlib), Exploratory Data Analysis (EDA), Visual Communication
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Génie logiciel : conception de logiciels et gestion de projets</p>
                      <p className="text-sm text-gray-600">
                        The Hong Kong University of Science and Technology • Mai 2024 • Identifiant: DFQNEYNSV8PK
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Intermediate Machine Learning</p>
                      <p className="text-sm text-gray-600">Kaggle • Mai 2024</p>
                      <p className="text-sm text-gray-600">
                        Compétences: Data Preprocessing, Pipelines, Pandas, Python, Machine Learning, XGBoost, Data
                        Preprocess, Cross-Validation
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Intro to AI Ethics</p>
                      <p className="text-sm text-gray-600">Kaggle • Mai 2024</p>
                      <p className="text-sm text-gray-600">
                        Compétences: Fairness in Machine Learning, Bias Detection in AI, Model Cards, AI Ethics, IA
                        responsable, Human-Centered Design
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">La recherche documentaire</p>
                      <p className="text-sm text-gray-600">
                        École Polytechnique • Mai 2024 • Identifiant: 458ACVC4AQUY
                      </p>
                      <p className="text-sm text-gray-600">
                        Compétences: Research Methodologies, Data Management, Research, Investigation, Databases,
                        Document Management, Data Collection, Research Design
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">L'atelier Unix</p>
                      <p className="text-sm text-gray-600">
                        Johns Hopkins University • Mars 2024 • Identifiant: JG8AV7DSDN67
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Conception d'un site web pour tout le monde Capstone</p>
                      <p className="text-sm text-gray-600">
                        University of Michigan • Décembre 2023 • Identifiant: REQCCHVTH4N3
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Introduction à la programmation orientée objet (en C++)</p>
                      <p className="text-sm text-gray-600">
                        École Polytechnique Fédérale de Lausanne • Décembre 2023 • Identifiant: YBK9U2TVBKLK
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Interactivité avec JavaScript</p>
                      <p className="text-sm text-gray-600">
                        University of Michigan • Novembre 2023 • Identifiant: R28F4KPRJPDL
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Style Avancé avec Design Réactif</p>
                      <p className="text-sm text-gray-600">
                        University of Michigan • Novembre 2023 • Identifiant: JPY5M3PKNQN6
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Programme "It's My Business !"</p>
                      <p className="text-sm text-gray-600">INJAZ Al-Maghrib (Junior Achievement Worldwide)</p>
                      <p className="text-sm text-gray-600">
                        Compétences: Travail d'équipe, Communication, Planification de projets, Esprit
                        d'entrepreneuriat, Créativité
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <Award className="h-5 w-5 text-gray-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium">Programme "JA Economics for success"</p>
                      <p className="text-sm text-gray-600">INJAZ Al-Maghrib (Junior Achievement Worldwide)</p>
                      <p className="text-sm text-gray-600">
                        Compétences: Gestion de l'argent, Littératie financière, Préparation à l'emploi, Prise de
                        décision, Planification de carrière, Responsabilité personnelle, Objectifs financiers
                      </p>
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 bg-gradient-to-r from-gray-800 to-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} Bilal El Khantouri. Tous droits réservés.</p>
          <div className="mt-4 flex justify-center space-x-4">
            <a
              href="https://github.com/Bill17kh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/bilal-el-khantouri"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:elkhantouri.bl@gmail.com"
              className="text-gray-300 hover:text-white transition-all duration-300 transform hover:scale-125"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

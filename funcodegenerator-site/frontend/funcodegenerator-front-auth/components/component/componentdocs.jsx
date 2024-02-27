/**
 * This code was generated by v0 by Vercel.
 * @see https://v0.dev/t/nT1bV9GqnD2
 */
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Componentdocs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="flex items-center h-14 px-4 border-b lg:h-20 xl:px-6">
        <Link
          className="inline-flex items-center font-semibold lg:mr-4 lg:order-last"
          href="#"
        >
          <FlagIcon className="h-6 w-6" />
          <span className="ml-2 hidden lg:inline">FunCodeGenerator Docs</span>
        </Link>
        <div className="flex-1 min-w-0 w-0 mx-2 lg:mx-4">
          <form className="w-full">
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-300 dark:text-gray-700" />
              <Input
                className="pl-8 w-full text-base border-0 box-shadow-none"
                placeholder="Search the docs (t or /)"
                type="search"
              />
            </div>
          </form>
        </div>
        <div className="hidden lg:flex lg:gap-4 lg:ml-auto mr-5">
          <Button size="sm" variant="outline">
            <BookIcon className="w-4 h-4 mr-2 shrink-0" />
            Edit on GitHub
          </Button>
        </div>
      </header>
      <main className="flex-1 min-h-0 pb-6">
        <div className="flex max-w-7xl mx-auto gap-4 lg:gap-8 px-4 md:px-6">
          <div className="hidden lg:block w-80">
            <div className="sticky top-14 mt-10">
              <nav className="grid gap-1.5 text-sm">
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#introduction"
                >
                  Introducción
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#getting-started"
                >
                  Comenzando
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#navigation"
                >
                  Barra de Navegación
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#login"
                >
                  Inicio de Sesión
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#user-registration"
                >
                  Registro de Usuario
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#drawing-tools"
                >
                  Herramientas de Dibujo
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#code-generation"
                >
                  Generación de Código
                </Link>
                <Link
                  className="flex items-center py-2 pl-2 rounded-md bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-50 transition duration-300 hover:bg-gray-200 dark:hover:bg-gray-700"
                  href="#generated-code"
                >
                  Código Generado
                </Link>
              </nav>
            </div>
          </div>
          <div className="space-y-6 w-full max-w-3xl min-h-0">
            <div className="prose max-w-none w-full pb-6">
              <h1>Empezemos</h1>
              <p>Bienvenido a la documentacion de FunCodeGenerator</p>
            </div>
            <div className="grid gap-8">
              <section id="introduction" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">Introducción</h2>
                <p className="text-lg">
                  ¡Bienvenido a FunCodeGenerator! Este manual te guiará a través
                  de cada paso para utilizar nuestra plataforma de generación de
                  código a partir de bocetos. Sigue estas instrucciones
                  detalladas para aprovechar al máximo todas las características
                  que FunCodeGenerator tiene para ofrecerte.
                </p>
                <img
                  alt="Introducción a FunCodeGenerator"
                  className="rounded-lg"
                  src="/LogoFCG.png"
                />
              </section>

              <section id="getting-started" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">Comenzando</h2>
                <p className="text-lg">
                  Para comenzar, abre tu navegador web y accede a
                  FunCodeGenerator a través del siguiente enlace:
                </p>
                <a
                  href="https://www.funcodegenerator.me/"
                  className="text-blue-500 hover:underline"
                >
                  https://www.funcodegenerator.me/
                </a>
                <p className="text-lg">
                  FunCodeGenerator ya se encuentra desplegada, serás
                  automáticamente redirigido a la página de inicio.
                </p>
                <img
                  alt="Comenzando con FunCodeGenerator"
                  className="rounded-lg"
                  src="/landingFCG.png"
                />
              </section>

              <section id="navigation" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">Barra de Navegación</h2>
                <p className="text-lg">
                  En la parte superior de la pantalla, verás una barra de
                  navegación con varias opciones:
                </p>
                <ul className="list-disc pl-8">
                  <li>
                    <span className="font-bold">Home:</span> Te llevará de
                    regreso a la página de inicio en cualquier momento.
                  </li>
                  <li>
                    <span className="font-bold">Features:</span> Aquí
                    encontrarás una lista detallada de todas las funcionalidades
                    que ofrece FunCodeGenerator, incluyendo herramientas de
                    dibujo, generación de código y más.
                  </li>
                  <li>
                    <span className="font-bold">About:</span> Esta sección
                    proporciona información sobre la aplicación y el equipo de
                    desarrollo detrás de FunCodeGenerator.
                  </li>
                  <li>
                    <span className="font-bold">Contact:</span> Si necesitas
                    ayuda o tienes alguna pregunta, puedes utilizar este enlace
                    para ponerte en contacto con nuestro equipo de soporte.
                  </li>
                  <li>
                    <span className="font-bold">Login:</span> Si ya tienes una
                    cuenta, puedes iniciar sesión aquí para acceder a todas las
                    funciones de la plataforma.
                  </li>
                </ul>
                
              </section>

              <section id="login" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">Inicio de Sesión</h2>
                <p className="text-lg">
                  Si eres un usuario registrado, simplemente ingresa tus
                  credenciales (correo electrónico y contraseña) y haz clic en
                  "Login" para acceder a tu cuenta. Si eres nuevo en
                  FunCodeGenerator, puedes registrarte haciendo clic en el
                  enlace correspondiente y completando el formulario de registro
                  con tu información personal.
                </p>
                <img
                  alt="Inicio de Sesión"
                  className="rounded-lg"
                  src="/loginFCG.png"
                />
              </section>

              <section id="user-registration" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">Registro de Usuario</h2>
                <p className="text-lg">
                  Completa el formulario de registro con la siguiente
                  información:
                </p>
                <ul className="list-disc pl-8">
                  <li>
                    Nombre de usuario: Elige un nombre de usuario único que
                    utilizarás para acceder a tu cuenta.
                  </li>
                  <li>
                    Correo electrónico: Proporciona una dirección de correo
                    electrónico válida.
                  </li>
                  <li>
                    Contraseña: Crea una contraseña segura para proteger tu
                    cuenta.
                  </li>
                  <li>
                    Confirmar contraseña: Vuelve a ingresar la contraseña para
                    confirmarla.
                  </li>
                </ul>
                <p className="text-lg">
                  Una vez completados todos los campos, haz clic en "Register"
                  para crear tu cuenta en FunCodeGenerator.
                </p>
                <img
                  alt="Registro de Usuario"
                  className="rounded-lg"
                  src="/registerFCG.png"
                />
              </section>

              <section id="drawing-tools" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">
                  Herramientas de Dibujo
                </h2>
                <p className="text-lg">
                  Una vez dentro de la plataforma, en la sección de herramientas
                  de dibujo, encontrarás un botón con tres líneas en la esquina
                  superior izquierda. Este botón te permitirá personalizar la
                  vista y configuración de las herramientas, así como ajustar el
                  zoom de la pantalla.
                </p>
                <p className="text-lg">
                  En la parte inferior central de la pantalla, verás todas las
                  herramientas disponibles para dibujar, incluyendo lápices,
                  flechas, texto, formas geométricas, herramientas de selección,
                  entre otras.
                </p>
                <p className="text-lg">
                  Utiliza estas herramientas para crear tus diseños de
                  interfaces de usuario de manera intuitiva y fácil de entender.
                </p>
                <img
                  alt="Herramientas de Dibujo"
                  className="rounded-lg"
                  src="/drawFCG.png"
                />
              </section>

              <section id="code-generation" className="border-b pb-4">
                <h2 className="text-3xl font-bold mb-2">
                  Generación de Código
                </h2>
                <p className="text-lg">
                  Una vez que hayas diseñado tu interfaz utilizando las
                  herramientas de dibujo, selecciona toda la interfaz con el
                  puntero del ratón.
                </p>
                <p className="text-lg">
                  Luego, haz clic en el botón "Generate Code" para que
                  FunCodeGenerator convierta tu diseño en código funcional.
                </p>
                <p className="text-lg">
                  Una ventana emergente mostrará una previsualización del código
                  generado en CSS, HTML y JavaScript.
                </p>
                <p className="text-lg">
                  Desde esta ventana, tienes la opción de copiar el código
                  generado y pegarlo en tu proyecto, así como moverlo a
                  cualquier página o aplicación que desees.
                </p>
                <img
                  alt="Generación de Código"
                  className="rounded-lg"
                  src="/codeFCG.png"
                />
              </section>

              <section id="generated-code" className="pb-4">
                <h2 className="text-3xl font-bold mb-2">Código Generado</h2>
                <p className="text-lg">
                  El código generado por FunCodeGenerator está diseñado para ser
                  compatible con múltiples plataformas y es apto para su uso en
                  proyectos web.
                </p>
                <p className="text-lg">
                  El código generado incluirá todas las características y
                  estilos que hayas definido en tu diseño, permitiéndote ahorrar
                  tiempo y esfuerzo en el proceso de desarrollo.
                </p>
                <img
                  alt="Código Generado"
                  className="rounded-lg"
                  src="/generateFCG.png"
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function FlagIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
      <line x1="4" x2="4" y1="22" y2="15" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
    </svg>
  );
}
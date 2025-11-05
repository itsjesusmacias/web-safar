import { Button } from "../ui/button";

const BlogBanner = () => {
  return (
    <section className="bg-primary py-10">
      <div className="px-4 md:px-0 md:w-[850px] mx-auto text-white">
        <div className="flex flex-row justify-between md:items-center md:mb-8 mb-4">
          <h3 className="text-2xl font-bold">
            Safar nace de una necesidad real
          </h3>
          <Button
            variant="link"
            className="hidden md:block bg-white text-black rounded-3xl hover:bg-accent hover:text-accent-foreground cursor-pointer"
          >
            Leer más
          </Button>
        </div>
        <p className="hidden md:block font-semibold text-lg">
          Durante mucho tiempo quise viajar pero no quiería hacerlo solo. Busqué
          comunidades y plataformas, pero ninguna unía compatibilidad, claridad
          y organización en un mismo lugar. Por eso creé Safar: un espacio donde
          personas afines se encuentran y convierten ideas en viajes reales. Con
          grupos privados, chat y herramientas simples, planificar deja de ser
          un caos y empezar se vuelve fácil.
        </p>
        <p className="block md:hidden font-medium text-regular">
          Quería viajar, pero no solo. Probé comunidades y apps: faltaba
          compatibilidad, claridad y orden.
        </p>
        <p className="block md:hidden font-medium text-regular mt-2">
          Por eso creé Safar: conecta a personas afines y convierte ideas en
          viajes reales con grupos privados, chat y herramientas simples.
        </p>
        <Button
          variant="link"
          className="block md:hidden mt-4 w-full bg-white text-black rounded-3xl hover:bg-accent hover:text-accent-foreground cursor-pointer"
        >
          Leer más
        </Button>
      </div>
    </section>
  );
};

export { BlogBanner };

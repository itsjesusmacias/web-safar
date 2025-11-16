interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  shadowColor: "pink" | "yellow";
}

export const FeatureCard = ({
  title,
  description,
  imageSrc,
  imageAlt,
  shadowColor,
}: FeatureCardProps) => {
  const shadowClass =
    shadowColor === "pink" ? "card-pink-shadow" : "card-yellow-shadow";

  return (
    <div
      className={`border-2 border-gray-200 rounded-lg p-4 bg-white ${shadowClass}`}
    >
      <h3 className="text-md font-medium">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
      <div className="py-2 mt-2">
        <img src={imageSrc} alt={imageAlt} width={375} height={143} />
      </div>
    </div>
  );
};

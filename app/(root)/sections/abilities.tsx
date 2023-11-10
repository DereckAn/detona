import { abilities } from "@/assets/constants";
import CardAbilities from "@/components/ui/card-abilities";

const Abilities = () => {
  return (
    <section className="bg-secondary">
      <div className="grid grid-cols-2 px-20 ">
        {abilities.map((ability) => (
            <CardAbilities key={ability.id} {...ability} />
        ))}
      </div>
    </section>
  );
};

export default Abilities;

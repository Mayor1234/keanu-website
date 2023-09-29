import Image from 'next/image';
import keanuBio from '../../public/images/keanu-bio.jpeg';

const KeanuReevesBiography = () => {
  return (
    <div className="max-w-5xl mx-auto min-h-screen my-20">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">Keanu Reeves</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-5 lg:px-0">
          <div className="text-center">
            <Image
              src={keanuBio}
              alt="Keanu Reeves"
              className="mx-auto w-96 h-96 object-cover object-center lg:rounded-md"
            />
          </div>

          <div>
            <p className="text-xl">
              Keanu Reeves is a Canadian actor, producer, and musician.
            </p>

            <p className="mt-4">
              Keanu Reeves was born on September 2, 1964, in Beirut, Lebanon. He
              began his acting career in the late 1980s and gained recognition
              for his roles in iconic movies like The Matrix trilogy, John Wick
              series, and Speed, Bill & Ted&apos;s Excellent Adventure and its
              sequels. Reeves has since become a well-known action star and has
              appeared in numerous successful films.
            </p>

            <p className="mt-4">
              Throughout his career, Keanu Reeves has received critical acclaim
              for his acting and has become a beloved figure in the film
              industry. He is also known for his humility and kindness.
            </p>

            <p className="mt-4">
              In addition to his acting career, Reeves is an accomplished
              musician and has played bass guitar for the band Dogstar. He is
              also involved in various philanthropic endeavors.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KeanuReevesBiography;

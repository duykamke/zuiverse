import { useRouter } from "next/router";
import { tw } from "twind";

export default function CharNav() {
  const router = useRouter();
  
  const alphabeticalSections: Record<
    string,
    Array<{ name: string; link: string }>
  > = {
    A: [
      {
        name: "about me",
        link: "/about",
      },
      {
        name: "anime",
        link: "/anime",
      },
    ],
    B: [
      {
        name: "bout me",
        link: "/about",
      },
      {
        name: "boob",
        link: "/anime",
      },
    ],
    C: [],
    D: [],
    E: [],
    F: [],
    G: [],
    H: [],
    I: [],
    J: [],
    K: [],
    L: [],
    M: [],
    N: [],
    O: [],
    P: [],
    Q: [],
    R: [],
    S: [],
    T: [],
    U: [],
    V: [],
    W: [],
    X: [],
    Y: [],
    Z: [],
  };

  const dropDownStringLength = (dropDownStrings: string[]) => {
    let length = 0;
    dropDownStrings.forEach((s, i) => {
      length = length + s.length;
      if (i < dropDownStrings.length - 1) {
        length = length + 2;
      }
    });
    return length;
  };

  return (
    <ul
      className={tw`
      w-full
      inline-flex
      justify-between`}
    >
      {Object.entries(alphabeticalSections).map((character, characterIndex) => {
        return (
          <li
            className={tw`flex 
            cursor-pointer
            p-2
            group`}
            key={characterIndex}
          >
            <h4
              className={tw`
              relative`}
            >
              <span>{character[0]}</span>
              <span
                className={tw`
                absolute
                -left-1
                z-50
                pl-3
                transform-gpu
                rotate-90
                origin-bottom-left
                overflow-x-hidden
                whitespace-nowrap
                transition-width
                ease-linear
                duration-300
                w-0
                group-hover:w-[${
                  dropDownStringLength(character[1].flatMap((s) => s.name))
                }ch]`}
              >
                {character[1].map((section, sectionIndex) => {
                  let name = section.name;
                  if (sectionIndex < 1) {
                    name = name.substring(1);
                    return <a href={section.link} key={section.name}>{name}</a>;
                  } else {
                    return (
                      <>
                        <span>,&nbsp;</span>
                        <a href={section.link} key={section.name}>
                          {name}
                        </a>
                      </>
                    );
                  }
                })}
              </span>
            </h4>
          </li>
        );
      })}
    </ul>
  );
}

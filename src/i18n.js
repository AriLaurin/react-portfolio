import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part1: "Welcome",
            part2:
              " I'm Arijus Laurin, an aspiring Cyber Security Operator. Below you can find my details.",
            part3: "Details",
            part4: "About Me",
            part5:
              "I work with various programming tasks such as; web-development, back-end server management and cyber security projects. For Web-Dev I use React, and I have back-end experience with Linux systems such as Ubuntu Servers and Kali.",
            part6: "Experience",
            part7:
              "I studied IT & Media production in my freshman year of highschool, then followed the IT-path the second year, graduating as a Web-Developer. Afterwards I took an apprenticeship as a full-stack developer and currently study cyber security alongside it.",
            part8: "About my projects",
            part9:
              "Most of my projects are done to push myself forward into the fields I study. For example, I develop a webpage to display my work, I create various scripts and code to expand my utility and tinker with different machines to execute my projects.",
            part10: "Projects & Events",
            part11:
              "In an effort to make my dream into reality, I founded this group to take on cyber security operations. It consists of people who share the same interest in wanting to partake in cyber security operations, meaning that as a group, we work together to achieve odd-jobs. It is my goal with this group to expand my knowledge and skills in cyber-sec operations and to grow a network with people that have similar interests.",
            part12: "Find me on",
          },
        },
      },
      no: {
        translation: {
          description: {
            part1: "Velkommen",
            part2:
              "Jeg er Arijus Laurin, en ambisiøs cybersikkerhetsoperatør. Nedenfor finner du detaljene mine.",
            part3: "Detaljer",
            part4: "Om Meg",
            part5:
              "Jeg jobber med ulike programmeringsoppgaver som; web-utvikling, back-end serveradministrasjon og cybersikkerhet prosjekter. For Web-Dev bruker jeg React, og jeg har back-end erfaring med Linux-systemer som Ubuntu-servere og Kali.",
            part6: "Erfaring",
            part7:
              "Jeg studerte IT- og medieproduksjon i mitt første år på videregående, deretter fulgte jeg IT-veien det andre året, og ble uteksaminert som webutvikler. Etterpå tok jeg læreplass som full-stack-utvikler og studerer for tiden cybersikkerhet ved siden av det.",
            part8: "Om prosjektene",
            part9:
              "De fleste av prosjektene mine er gjort for å presse meg selv videre inn i feltene jeg studerer. For eksempel utvikler jeg en nettside for å vise arbeidet mitt, jeg lager forskjellige skript og kode for å utvide verktøyet mitt og tukler med forskjellige maskiner for å utføre prosjektene mine.",
            part10: "Prosjekter og arrangementer",
            part11:
              "I et forsøk på å gjøre drømmen min til virkelighet, grunnla jeg denne gruppen for å ta på meg cybersikkerhetsoperasjoner. Den består av folk som deler den samme interessen for å ønske å delta i cybersikkerhetsoperasjoner, noe som betyr at vi som en gruppe jobber sammen for å oppnå diverse oppgaver. Det er mitt mål med denne gruppen å utvide min kunnskap og ferdigheter innen cyber-sek-operasjoner og å bygge et nettverk med folk som har lignende interesser.",
            part12: "Finn meg på",
          },
        },
      },
    },
  });

export default i18n;

export default function Header() {
  return (
    <div>
      <div id="Title">
        <h1>Omi`s Rezepte</h1>
      </div>
      <div id="NavButtons">
        <a href="" className="cursor-pointer">
          Home
        </a>
        <a className="cursor-pointer">Kategorie</a>
        <a href="/createrecipe" className="cursor-pointer">
          Rezept erstellen
        </a>
      </div>
    </div>
  );
}

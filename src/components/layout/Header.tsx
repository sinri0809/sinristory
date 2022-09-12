import Button from "components/common/Button";

const Header = () => {
  return (
    <header>
      <h1>reference typescript cra</h1>

      <nav>
        <Button
          label="sea"
          link="/sea"
          className="btn-sea"
        />
      </nav>
    </header>
  )
};

export default Header;
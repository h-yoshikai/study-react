// import { Headline, Links } from "..";
import { Headline, Links } from "src/components";
import classes from "src/components/Main/Main.module.css";

export function Main(props) {
  return (
    <main className={classes.main}>
      <Headline page={props.page}>
        <code className={classes.code}>pages/{props.page}.js</code>
      </Headline>

      <Links />
    </main>
  );
}

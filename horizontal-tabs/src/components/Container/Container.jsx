import { TABS } from "../../tabs";
import Tabs from "../Tabs/Tabs";

function Container() {
  return (
    <Tabs tabs={TABS}>
      <div label="Tab 1">
        <div className="content">
          <h2 className="content__title">Content 1</h2>
          <p className="content__description">
            Yes, Yes, without the oops! God creates dinosaurs. God destroys
            dinosaurs. God creates Man. Man destroys God. Man creates Dinosaurs.
            Just my luck, no ice. Eventually, you do plan to have dinosaurs on
            your dinosaur tour, right? Checkmate... God help us, we are in the
            hands of engineers.
          </p>
        </div>
      </div>
      <div label="Tab 2">
        <div className="content">
          <h2 className="content__title">Content 2</h2>
          <p className="content__description">
            Yeah, but John, if The Pirates of the Caribbean breaks down, the
            pirates do not eat the tourists. Did he just throw my cat out of the
            window? Do you have any idea how long it takes those cups to
            decompose. Yes, Yes, without the oops! Remind me to thank John for a
            lovely weekend.
          </p>
        </div>
      </div>
      <div label="Tab 3">
        <div className="content">
          <h2 className="content__title">Content 3</h2>
          <p className="content__description">
            Must go faster. I gave it a cold? I gave it a virus. A computer
            virus. So you two dig up, dig up dinosaurs? God help us, we are in
            the hands of engineers. Just my luck, no ice. God help us, we are in
            the hands of engineers. Eventually, you do plan to have dinosaurs on
            your dinosaur tour, right?
          </p>
        </div>
      </div>
    </Tabs>
  );
}

export default Container;

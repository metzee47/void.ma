import { Advice } from "./Advice";
import { Catalog } from "./Catalog";
import { Contact } from "./Contact";
import { ContentHeader } from "./ContentHeader";
import { Description } from "./Description";
import { Formula } from "./Formula";
import { HowToUse } from "./HowToUse";
import { Service } from "./Service";
import { Stat } from "./Stat";

export const Main = () => (
    <div className="main">
        <ContentHeader/>
        <Description/>
        <HowToUse/>
        <Advice/>
        <Service/>
        <Formula/>
        <Catalog/>
        <Stat/>
        <Contact/>
      </div>
)
import { Button } from "components/Button";
import { AnimatePresence, motion } from "framer-motion";
import { useSelector } from "react-redux";
import { selectLinks } from "store/slice/linkSlice";
import classes from "./Shortens.module.scss";

const Shortens = () => {
  const links = useSelector(selectLinks);

  if (!links?.length) return null;

  return (
    <section className={classes.Shortens}>
      <div className="container">
        {links.map((item) => (
          <AnimatePresence key={item.code}>
            <motion.div
              className={classes.item}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <span>{item.original_link}</span>
              <span>{item.full_short_link2}</span>
              <Button variant="square">Copy</Button>
            </motion.div>
          </AnimatePresence>
        ))}
      </div>
    </section>
  );
};

export { Shortens };

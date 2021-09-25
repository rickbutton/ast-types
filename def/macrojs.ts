import { Fork } from "../types";
import es2020Def from "./es2020";
import typesPlugin from "../lib/types";

export default function fork(fork: Fork) {
  fork.use(es2020Def);

  const types = fork.use(typesPlugin);
  const def = types.Type.def;

  def("MacroBody")
    .build("tokens")
    .field("tokens", [Object]);

  def("MacroMatch")
    .build("name", "kind")
    .field("name", def("Identifier"))
    .field("kind", def("Identifier"));

  def("MacroPattern")
    .build("matches")
    .field("matches", [def("MacroMatch")]);

  def("MacroStatement")
    .bases("Statement")
    .build("id", "patterns")
    .field("id", def("Identifier"))
    .field("patterns", [def("MacroPattern")])

};

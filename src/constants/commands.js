import commands_css from "./commands/commands_css";
import commands_editor from "./commands/commands_editor";

export const commands =  {
    ...commands_css,
    ...commands_editor,
}

export const commandsAsOptions = Object.keys(commands).map(commandKey => ({
    key: commands[commandKey].key,
    description: commands[commandKey].description,
})).sort(function (a, b) {
    if (a.key === b.key) return 0;
    return a.key > b.key ? 1 : -1;
})

export default commands;


export default {
  name: "vacancy",
  title: "Vacancies",
  type: "document",
  fields: [
    { name: "isHiring", title: "Currently Hiring", type: "boolean" },
    { name: "role", title: "Role Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "note", title: "Note (shown below description)", type: "text" },
  ],
};

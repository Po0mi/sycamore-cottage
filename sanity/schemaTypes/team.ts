export default {
  name: "team",
  title: "Team Members",
  type: "document",
  fields: [
    { name: "initials", title: "Initials", type: "string" },
    { name: "name", title: "Full Name", type: "string" },
    { name: "role", title: "Role", type: "string" },
    { name: "order", title: "Display Order", type: "number" },
  ],
  preview: {
    select: { title: "name", subtitle: "role" },
  },
};

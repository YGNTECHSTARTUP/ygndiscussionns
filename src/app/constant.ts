
interface SidebarLink {
    imgURL:`../assets/icons/${string}`,
    route:`/${string}`,
    label:string
    
}
interface Question {
    id:number,
    title:string
}
export const tags:string[] = ["nextjs","react","typescript","javascript","nodejs","expressjs","mongodb","mongoose","sequelize","mysql","postgresql","docker","kubernetes","aws","azure","gcp","firebase","git","github","gitlab","bitbucket"]
export const questions:Question[] = [
    {
      id: 1,
      title: "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?"
    },
    {
      id:2,
      title: "What is the difference between client-side routing and server-side routing?"
    },
    {
      id:3,
      title: "How to fetch data in React?"
    },
    {
      id:4,
      title: "How to fetch data in React using hooks?"
    },
    {
        id:5,
        title: "WHat is the difference between useEffect and useLayoutEffect?"
    }
  ]
export const sidebarLinks: SidebarLink[] = [
{
imgURL: "../assets/icons/home.svg",
route: "/",
label: "Home",
},
{
imgURL: "../assets/icons/users.svg",
route: "/community",
label: "Community",
},
{
imgURL: "../assets/icons/star.svg",
route: "/collection",
label: "Collections",
},
{
imgURL: "../assets/icons/suitcase.svg",
route: "/jobs",
label: "Find Jobs",
},
{
imgURL: "../assets/icons/tag.svg",
route: "/tags",
label: "Tags",
},
{
imgURL: "../assets/icons/user.svg",
route: "/profile",
label: "Profile",
},
{
imgURL: "../assets/icons/question.svg",
route: "/ask-question",
label: "Ask a question",
},
];
import React from "react";
import * as Icon from "react-feather";
const navigationConfig = [
  {
    id: "dashboard",
    title: "DASHBOARD",
    type: "item",
    permissions: ["admin", "editor"],
    navLink: "/",
  },
  {
    type: "groupHeader",
    groupTitle: "User register list",
  },
  {
    id: "registerUserList",
    title: "Register user list ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/registeruser/registerUserList",
  },
  {
    type: "groupHeader",
    groupTitle: "Category",
  },
  {
    id: "addCategory",
    title: "List of category ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/category/categoryList",
  },
  {
    type: "groupHeader",
    groupTitle: "Subcategory",
  },
  {
    id: "addSubcategory",
    title: " List of subcategory",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/subcategory/subcategoryList",
  },
  // {
  //   id: "membershipList",
  //   title: "Membership List",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/membership/membershipList",
  // },
  // {
  //   id: "packagePlanList",
  //   title: "Active Members ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/package/packagePlanList",
  // },

  {
    type: "groupHeader",
    groupTitle: "Resources list ",
  },
  {
    id: "ResourceList",
    title: "List of resource ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/resource/resourceList",
  },
  {
    type: "groupHeader",
    groupTitle: "Add sponsor ",
  },

  {
    id: "basedCategory",
    title: "based on category list  ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/sponsor/basedCategory",
  },
  // {
  //   id: "basedSubCategory",
  //   title: "based on subcategory list ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/package/nonActivePlanList",
  //   navLink: "/app/brahmaand/sponsor/basedSubCategory",
  // },

  {
    type: "groupHeader",
    groupTitle: "Blog category",
  },

  {
    id: "blogCategory",
    title: "list of blog category",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/blog/blogCategoryList",
  },

  {
    type: "groupHeader",
    groupTitle: "Blog",
  },
  {
    id: "blogs",
    title: "blog List",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/blogs/blogList",
  },
  {
    type: "groupHeader",
    groupTitle: "LeaderBoard",
  },
  {
    id: "leaderBoard",
    title: "View leaderboard leader ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/leaderboard/leaderBoardList",
  },
  {
    id: "notification",
    title: "Notification ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/notif/notification",
  },
  {
    id: "usernotification",
    title: " User Notification ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    navLink: "/app/brahmaand/notif/UserNotification",
  },
  {
    id: "profile",
    title: "profile  ",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/pages/profile",
  },
  {
    id: "logout",
    title: "Logout",
    type: "item",
    icon: <Icon.ArrowRight size={12} />,
    permissions: ["admin", "editor"],
    // navLink: "/pages/login",
  },



  // {
  //   id: "nonActivePlanList",
  //   title: "Transction History ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   // navLink: "/app/package/nonActivePlanList",
  //   navLink: "/",
  // },
  // {
  //   id: "feedbackList",
  //   title: "Feedback List ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/feedback/feedbackList",
  // },
  // {
  //   id: "userAppreciation",
  //   title: "User Appreciation List ",
  //   type: "item",
  //   icon: <Icon.ArrowRight size={12} />,
  //   permissions: ["admin", "editor"],
  //   navLink: "/app/showAppre/userAppreciation",
  // },

  // {
  //   id: "login",
  //   title: "Logout ",
  //   type: "item",
  //   permissions: ["admin", "editor"],
  //   navLink: "/pages/login",
  // },
];
export default navigationConfig;

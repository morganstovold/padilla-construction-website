export const siteConfig = {
  name: "Padilla Design & Build",
  legalName: "Padilla Design & Build",
  shortName: "PD&B",
  description:
    "Expert home remodeling and renovation services in Alamo, CA. Over 20 years of experience transforming kitchens, bathrooms, bedrooms, and living spaces with quality craftsmanship.",
  longDescription:
    "With over 20 years of experience in the building industry, Padilla Design & Build has the expertise to handle any project. From kitchen and bathroom remodeling to complete home renovations, we provide high-quality workmanship, personalized service, and attention to detail. Serving Alamo, Danville, Walnut Creek, San Ramon, and surrounding Contra Costa County areas.",
  url: "https://padilladesignbuild.com", // Replace with your actual domain
  founded: "2004", // Adjust if different

  branding: {
    primaryColor: "#ffffff", // tertiary color from your theme
    backgroundColor: "#ffffff", // alternate color from your theme
  },

  contact: {
    phone: "(925) 305-6316",
    phoneRaw: "+19253056316",
    email: "noe@PadillaDesignandBuild.com",
    address: {
      street: "3000 Danville Boulevard Ste 7-103",
      city: "Alamo",
      state: "CA",
      stateAbbr: "CA",
      zip: "94507",
      country: "United States",
    },
  },

  owner: {
    name: "Noe Padilla",
    title: "Owner",
  },

  serviceArea: {
    primary: ["Alamo", "Danville", "Walnut Creek", "San Ramon", "Concord"],
    county: "Contra Costa County",
    state: "California",
    radius: "30 miles",
  },

  services: [
    {
      name: "Kitchen Remodeling",
      slug: "kitchen-remodeling",
      description:
        "Complete kitchen renovations with custom cabinets, countertops, and modern appliances",
    },
    {
      name: "Bathroom Remodeling",
      slug: "bathroom-remodeling",
      description:
        "Full bathroom renovations including fixtures, tile work, and custom vanities",
    },
    {
      name: "Interior Renovations",
      slug: "interior-renovations",
      description: "Bedroom, living room, and whole-home interior remodeling",
    },
    {
      name: "Market Prep & Staging",
      slug: "market-prep",
      description:
        "Strategic home improvements to maximize sale value and appeal",
    },
    {
      name: "Custom Carpentry",
      slug: "custom-carpentry",
      description: "Custom built-ins, trim work, and finish carpentry",
    },
  ],

  keywords: [
    "kitchen remodeling Alamo CA",
    "bathroom renovation Alamo",
    "home remodeling Walnut Creek",
    "kitchen renovation San Ramon",
    "bathroom remodel Danville",
    "interior remodeling Contra Costa County",
    "home improvement Alamo California",
    "residential remodeling Bay Area",
    "kitchen contractor Alamo",
    "bathroom contractor Walnut Creek",
  ],

  social: {
    yelp: "https://www.yelp.com/biz/padilla-design-and-build-alamo",
    google: "", // Add when available
    facebook: "", // Add when available
    instagram: "", // Add when available
  },

  jobber: {
    clientHubId: "8d54c3c3-881d-4849-a185-6f48b7faa48b-1042146",
    formId: "1042146",
    formUrl:
      "https://clienthub.getjobber.com/client_hubs/8d54c3c3-881d-4849-a185-6f48b7faa48b/public/work_request/embedded_work_request_form?form_id=1042146",
  },

  businessHours: {
    monday: "8:00 AM - 5:00 PM",
    tuesday: "8:00 AM - 5:00 PM",
    wednesday: "8:00 AM - 5:00 PM",
    thursday: "8:00 AM - 5:00 PM",
    friday: "8:00 AM - 5:00 PM",
    saturday: "Closed",
    sunday: "Closed",
  },

  features: [
    "Over 20 years of experience",
    "Licensed and insured",
    "Quality craftsmanship guaranteed",
    "Personalized service",
    "On-time, on-budget completion",
    "Free consultations",
  ],
};

export type SiteConfig = typeof siteConfig;

import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  if (isHorizontal) {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  } else {
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  if (isHorizontal) {
    return {
      id: `full-width-tab-${index}`,
      "aria-controls": `full-width-tabpanel-${index}`,
    };
  } else {
    return {
      id: `vertical-tab-${index}`,
    };
  }
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "theme.palette.background.paper",
    display: "flex",
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

const JobList = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const experienceItems = {
    "M-Builds": {
      jobTitle: "Lead Software Engineer @",
      duration: "JAN 2022 - PRESENT",
      desc: [
       " Successfully completed several high-profile software projects, including a customer portal that increased customer engagement by 40% and an inventory management system that reduced inventory errors by 30%",
        "Implemented automated testing and continuous integration practices, resulting in a 20% increase in software delivery efficiency",
        "Developed and maintained an internal library of reusable code components that reduced development time by 25%",
       " Led a cross-functional team of software engineers, UX designers and product managers to develop a new software product from concept to launch, resulting in a 15% increase in revenue"
             ],
    },
    "Arklight International": {
      jobTitle: "Software Engineer @",
      duration: "APR 2022 - FEB 2023",
      desc: [
        "Spearheaded implementation of watertight Principle of Least Authority across 100% of software engineering and associated team members.",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness while 28% faster load time than industry average",
        "Build distributed storage, index, and query systems that are scalable, fault-tolerant, low cost, and easy to manage/use.",
        "Collaborate with experienced cross-disciplinary Engineers to conceive, design, and bring innovative in-house and client products to life.",
             ],
    },
    "Freelance": {
      jobTitle: "Software Developement Engineer @",
      duration: "JULY 2021 - JAN 2023",
      desc: [
        "Write modern, performant, maintainable code for a diverse array of client and internal projects.",
        "Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Node JS, React, WordPress, and Netlify.",
        "Interfaced with clients on a weekly basis, providing technological expertise",
        "Collaborated with senior engineers and product management following best practices for the full software development life cycle, including coding standards, code reviews, source control management, build processes, testing, and operations.",
      ],
    },
    "Meliora Technologies Limited": {
      jobTitle: "Software  Engineer @",
      duration: "SEP 2022 - DEC 2023",
      desc: [
        "Developed and implemented a new data analytics platform that allowed the company to analyze and visualize large volumes of data in real-time, resulting in a 25% increase in data analysis efficiency and a 20% reduction in errors.",
       " Worked with the product management team to design and develop a new customer relationship management (CRM) system that integrated with the company's existing software tools and allowed the sales team to better track and manage customer interactions. This resulted in a 15% increase in customer satisfaction and a 10% increase in sales revenue.",
       " Led a team of developers to design and implement a new mobile app for the company's flagship product, resulting in a 30% increase in user engagement and a 25% increase in revenue from mobile sales.",
       " Worked with the security team to implement new security protocols and features, resulting in a 50% reduction in security incidents and a 20% increase in customer trust.",
       "Successfully migrated the company's legacy systems to a modern cloud-based infrastructure, resulting in a 40% reduction in infrastructure costs and a 30% increase in system performance and availability"
      ],
    },
    "Eliminist Devs": {
      jobTitle: "Software Engineer Intern @",
      duration: "SEP 2020 - JULY 2021",
      desc: [
        "Executed deliverables concerning user stocks and tested user stocks deliverables and made sure that all modules were functioning at 100%",
        "Delivered responsive, cross browser compatible and accessibility compliant websites, achieving 12% faster load time than industry average",
        "Deliver engaging user experience through optimization of images, code, and cross-browser compatibility, increasing Time on Page by +60 seconds for the client websites",
        "Designed dynamic and browser compatible pages using React JS, TypeScript, Node and UI libraries like Fluent UI",
      ],
    },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation={!isHorizontal ? "vertical" : null}
        variant={isHorizontal ? "fullWidth" : "scrollable"}
        value={value}
        onChange={handleChange}
        className={classes.tabs}
        TabIndicatorProps={{
          style: {
            backgroundColor: "#64ffda",
          },
        }}
      >
        {Object.keys(experienceItems).map((key, i) => (
          <Tab
            label={isHorizontal ? `0${i}.` : key}
            {...a11yProps(i)}
            sx={{
              fontFamily: "NTR",
              fontSize: "1.5rem",
              display: "inline-flex",
              alignItems: "flex-start",
              marginLeft: "5.5rem",
            }}
          />
        ))}
      </Tabs>
      {Object.keys(experienceItems).map((key, i) => (
        <TabPanel value={value} index={i}>
          <span className="joblist-job-title">
            {experienceItems[key]["jobTitle"] + " "}
          </span>
          <span className="joblist-job-company">{key}</span>
          <div className="joblist-duration">
            {experienceItems[key]["duration"]}
          </div>
          <ul className="job-description">
            {experienceItems[key]["desc"].map(function (descItem, i) {
              return (
                <div>
                  <li key={i}>{descItem}</li>
                </div>
              );
            })}
          </ul>
        </TabPanel>
      ))}
    </div>
  );
};

export default JobList;

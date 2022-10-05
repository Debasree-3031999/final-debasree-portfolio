import { useEffect, useState, lazy, Suspense, useCallback } from "react";
import { Container, Row, Col, Spinner, Carousel } from "react-bootstrap";
import { skillsList, skillsData, certficatesList } from "./utils/helperList";

const SkillsBarChart = lazy(() => import("./utils/barChart"));
const IconCard = lazy(() => import("./utils/iconCard"));

const Skills = () => {
  const [barData, setBarData] = useState([]);

  const setChartData = useCallback((data) => {
    const skillNames = data.map(obj => obj.name);

    const defaultSkillData = skillNames.map(() => 0)
    const nameWiseData = data.map(obj => {
      return {
        name: obj.name,
        data: defaultSkillData
      };
    });

    data.forEach(skillsDataObj => {
      nameWiseData.forEach(categoryObj => {
        if (skillsDataObj.name === categoryObj.name) {
          let categoryIndex = skillNames.indexOf(skillsDataObj.name);
          if (categoryIndex !== -1) {
            let arrData = JSON.parse(JSON.stringify(categoryObj.data));
            arrData[categoryIndex] = skillsDataObj.rating;
            categoryObj.data = arrData;
          }
        }
      });
    });

    setBarData(nameWiseData);
  }, []);

  useEffect(() => {
    setChartData(skillsData);
  }, [setChartData]);


  return (
    <>
      <Container className="mt-5">
        <Suspense fallback={<div className="d-flex justify-content-center mt-5"><Spinner animation="border" variant="secondary" /></div>}>
          <Row xs={1} md={2}>
            <Col>
              <div className="py-3">
                {barData.length > 0 &&
                  <SkillsBarChart skillsData={barData} skills={barData.map(obj => obj.name)} />
                }
              </div>
            </Col>
            
          </Row>
          
        </Suspense>
      </Container>
      <br></br>
      <h2>Data Structure & Algorithm :</h2>
      <li>Arrays</li>
      <li>Strings</li>
      <li>Recursion</li>
      <li>Linked-List</li>
      <li>Dynamic Programing</li>
      <li>Graph</li><br/><br/>
      <h2>Soft Skills :</h2>
      <li>Communication</li>
      <li>Adaptibility</li>
      <li>Teamwork</li>
      <li>Time Management</li>
    </>
  )
};

export default Skills;
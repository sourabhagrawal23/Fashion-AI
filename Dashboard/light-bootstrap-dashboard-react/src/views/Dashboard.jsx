import React, { Component } from "react";
import { Grid, Row, Col} from "react-bootstrap";
import Chart from "react-google-charts";
import { Card } from "components/Card/Card.jsx";
import { DropdownButton, MenuItem } from "react-bootstrap";
import { StatsCard } from "components/StatsCard/StatsCard.jsx";
import {
  casual,
  bohoChic,
  elegant,
  sexy,
  vneck,
  sneck,
  legendData,
  roundneck,
  Stylemenu,
  Neckmenu
} from "variables/Variables.jsx";


class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      styleName : "Boho-Chic",
      styleData: bohoChic,
      styleOptions: {
        title: "Trend vs Time",
        vAxis: { viewWindowMode: "explicit", viewWindow: { min: 0 } },
        curveType: "function",
        legend: { position: "bottom" },
      },
      neckName: "Round neck",
      neckData: roundneck,
      neckOptions:{
        title: "Trend vs Time",
        vAxis: { viewWindowMode: "explicit", viewWindow: { min: 0 } },
        curveType: "function",
        legend: { position: "bottom" },
      }
    };
  }

  handleSelect=(e)=>{
    console.log(1);
  }

  createLegend(json) {
    var legend = [];
    for (var i = 0; i < json["names"].length; i++) {
      var type = "fa fa-circle text-" + json["types"][i];
      legend.push(<i className={type} key={i} />);
      legend.push(" ");
      legend.push(json["names"][i]);
    }
    return legend;
  }

  render() {
    return (
      <div className="content">
        <Grid fluid>
          <Row>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-server text-warning" />}
                statsText="Items Scraped"
                statsValue="2k+"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated recently"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-global text-success" />}
                statsText="Website"
                statsValue="Shein"
                statsIcon={<i className="fa fa-refresh" />}
                statsIconText="Updated recently"
              />
            </Col>
            <Col lg={4} sm={6}>
              <StatsCard
                bigIcon={<i className="pe-7s-timer text-success" />}
                statsText="Analysed data from"
                statsValue="Jan,'18"
                statsIcon={<i className="fa fa-area-chart" />}
                statsIconText="Updated last month"
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <DropdownButton bsStyle="default" title="Styles">
                {Stylemenu.map((obj) => {
                  return (
                    <MenuItem
                      onSelect={(event) => {
                        if(obj==="Boho-chic")
                          this.setState({styleData: bohoChic});
                        else if(obj==="Sexy")
                          this.setState({ styleData: sexy });
                        else if(obj==="Casual")
                          this.setState({ styleData: casual });
                        else if(obj==="Elegant")
                          this.setState({ styleData: elegant });
                        this.setState({ styleName: obj});
                        console.log(obj)
                      }}>
                      {obj}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Style Trends for Women's Tops"
                category={this.state.styleName}
                stats="Updated till April,2020"
                content={
                  <div className="ct-chart">
                    <Chart
                      chartType="LineChart"
                      width="100%"
                      height="105%"
                      data={this.state.styleData}
                      options={this.state.styleOptions}
                    />
                  </div>
                }
              />
            </Col>
          </Row>

          <Row>
            <Col lg={12}>
              <DropdownButton bsStyle="default" title="Necklines">
                {Neckmenu.map((obj) => {
                  return (
                    <MenuItem
                      onSelect={(event) => {
                        if (obj === "Round neck")
                          this.setState({ neckData: roundneck });
                        else if (obj === "V neck")
                          this.setState({ neckData: vneck });
                        else if (obj === "Spaghetti style")
                          this.setState({ neckData: sneck  });
                        this.setState({ neckName: obj });
                        console.log(obj)
                      }}>
                      {obj}
                    </MenuItem>
                  );
                })}
              </DropdownButton>
              <Card
                statsIcon="fa fa-history"
                id="chartHours"
                title="Neckline Trends for Women's Tops"
                category={this.state.neckName}
                stats="Updated til April, 2020"
                content={
                  <div className="ct-chart">
                    <Chart
                      chartType="LineChart"
                      width="100%"
                      height="105%"
                      data={this.state.neckData}
                      options={this.state.neckOptions}
                    />
                  </div>
                }
              />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

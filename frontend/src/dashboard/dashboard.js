import React from 'react';

import { Link } from 'react-router-dom';
import { timeTillNextDrugUse, DrugUsages, offences, checkupDoneToday } from '../services/http';

class Dashboard extends React.Component {
    contructor(props) {
        super(props);
        let drugs;
        let du;
        DrugUsages('localhost:8000/users/1/').then((i) => {
            drugs=i;
            timeTillNextDrugUse(i).then((j) => {
                du=j;
            });
        });

        this.state = {
            drugsNA: offences('localhost:8000/users/1/'),
            drugs: drugs,
            days: Math.floor(du/1000/60/60/24),
            hours: Math.floor(du/1000/60/60%24),
            minutes: Math.floor(du/1000/60%24),
            seconds: Math.floor(du/1000%60),
            checkup: checkupDoneToday('localhost:8000/users/1'),
        }
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    tick() {
        this.setState({
            drugsNA: this.state.drugsNA,
            drugs: this.state.drugs,
            days: Math.floor(du/1000/60/60/24),
            hours: Math.floor(du/1000/60/60%24),
            minutes: Math.floor(du/1000/60%24),
            seconds: Math.floor(du/1000%60),
            checkup: this.state.checkup,
        });
    }

    render() {
        return (
            
        )
    }
}
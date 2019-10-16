import React from 'react';
import { Link } from 'react-router-dom';
import { Trip } from './Trip';

export const TripsList = ({match, days}) => { 
    const filter = match.items.filter;
    const trips = filter ? sems.filter( trip => trip.type === map) : days;
    return (
        <div className="trips-list">
            <h3>{filter ? filter : 'All'} Trips</h3>            
            <table class="table">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Place</th>
                        <th>Type</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        trips.map((trip, ) => 
                            <Trip
                                key={}
                                {...trip}
                            />
                        )
                    }
                </tbody>
            </table>
            <div className="filters">
                Filter by:
                <Link to="/list">
                    All
				</Link>
                &#9679;
                <Link to="/list/Trek">
                    Treks
				</Link>
                &#9679;
                <Link to="/list/Club">
                    Clubs
				</Link>
                &#9679;
                <Link to="/list/Tropic">
                    Tropics
				</Link>
            </div>            
        </div>
    )
}
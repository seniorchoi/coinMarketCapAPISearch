import React, { Component } from 'react';
import {connect} from 'react-redux';

class PriceChart extends Component {

    renderPrice(data){
        return(
          <tr key={data.price_usd}>{data.price_usd}</tr>
        );
    }

    render() {
        return (
            <div>
                {/*<table className="table table-hover">*/}
                    {/*<thead>*/}
                        {/*<tr>*/}
                            {/*<th>Name</th>*/}
                            {/*<th>USD | $ </th>*/}
                            {/*<th>KRW | ‎₩ </th>*/}
                        {/*</tr>*/}
                    {/*</thead>*/}
                    {/*<tbody>*/}
                    {/*<tr>hi</tr>*/}
                    {/*</tbody>*/}
                {/*</table>*/}

                {/*{this.props.price.id}*/}
                {JSON.stringify(this.props.price)}

            </div>
        );
    }
}

function mapStateToProps({price}) {
    return { price };

}

export default connect(mapStateToProps)(PriceChart);

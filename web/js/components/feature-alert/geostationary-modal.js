import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { history } from '../../main';
import update from 'immutability-helper';
import {
  Button
} from 'reactstrap';

class GeostationaryModalBody extends React.Component {
  tryIt() {
    this.props.prepareAnimate();
    this.props.closeModal();
  }

  render() {
    return (
      <div className="compare-dialog">
        <p>
          Our latest release includes new layers from geostationary satellites –
          GOES East, GOES West and Himawari-8. Find these new layers in the new
          “Featured” tab of the “Add Layers” menu.
        </p>
        <p>
          These geostationary layers are updated much more frequently than
          other imagery in Worldview. For example, the set of geostationary
          layers included in this release are updated every 10 minutes.
        </p>
        <p>
          To take full advantage of this, the time (and timescale) of the timeline
          can now be set down to the hour and minute whenever any geostationary products
          are in the current list of overlays.
        </p>
        <p>
          For an optimal experience, set the time increment in the custom
          interval selector to 10 minute.
        </p>
        <p>
          The animation tool has also been updated to allow adjustments down to
          the hour and minute. Click below to set up an animation to see
          geostationary in action!
        </p>

        <Button
          className="btn-lg btn-primary mx-auto w-100"
          onClick={this.tryIt.bind(this)}>
            Try it!
        </Button>

      </div>
    );
  }
}

const getLocation = (search) => {
  search = search.split('/?').pop();
  const location = update(history.location, {
    search: { $set: search }
  });
  return location;
};

const mapDispatchToProps = (dispatch) => ({
  prepareAnimate: () => {
    const paramArr = [
      'p=geographic&',
      'l=Reference_Labels,Reference_Features(hidden),Coastlines(hidden),GOES-East_ABI_Band2_Red_Visible,VIIRS_SNPP_CorrectedReflectance_TrueColor(hidden),MODIS_Aqua_CorrectedReflectance_TrueColor(hidden),MODIS_Terra_CorrectedReflectance_TrueColor&',
      't=2019-09-01-T20%3A00%3A41Z&',
      'v=-84.25409131402579,21.881949559541848,-69.48846631402579,30.213980809541848&',
      'z=4&ics=true&ici=5&icd=10&t=2019-09-01-T20%3A00%3A41Z&',
      'ab=on&as=2019-09-01-T16%3A00%3A00Z&ae=2019-09-01-T21%3A00%3A00Z&al=true'
    ];
    const urlParams = paramArr.reduce((prev, curr) => prev + curr, '');
    const location = getLocation(urlParams);
    dispatch({ type: 'REDUX-LOCATION-POP-ACTION', payload: location });
  }
});

export default connect(
  null,
  mapDispatchToProps
)(GeostationaryModalBody);

GeostationaryModalBody.propTypes = {
  closeModal: PropTypes.func,
  prepareAnimate: PropTypes.func
};

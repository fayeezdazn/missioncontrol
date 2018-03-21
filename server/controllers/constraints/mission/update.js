module.exports = {
  latitude: {
    presence: true,
    numericality: {
      lessThanOrEqualTo: 90,
      greaterThanOrEqualTo: -90
    }
  },
  longitude: {
    presence: true,
    numericality: {
      lessThanOrEqualTo: 180,
      greaterThanOrEqualTo: -180
    }
  },
  status: {
    inclusion: {
      within: ['atPickup', 'movingToPickup', 'atDropoff', 'movingToDropoff'],
    }
  },
  dav_id: {
    presence: {
      allowEmpty: false
    },
    type: 'string'
  }
};

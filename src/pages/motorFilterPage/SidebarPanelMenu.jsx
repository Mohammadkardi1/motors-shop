import React from 'react'
import BodyType from '../../components/filters/BodyType'
import DistanceShipping from '../../components/filters/DistanceShipping'
import Drivetrian from '../../components/filters/Drivetrian'
import ExteriorColor from '../../components/filters/ExteriorColor'
import Features from '../../components/filters/Features'
import FuelType from '../../components/filters/FuelType'
import InteriorColor from '../../components/filters/InteriorColor'
import Make from '../../components/filters/Make'
import Mileage from '../../components/filters/Mileage'
import NearestDistance from '../../components/filters/NearestDistance'
import Price from '../../components/filters/Price'
import Transmission from '../../components/filters/Transmission'
import Year from '../../components/filters/Year'
import AdvancedSearch from '../../components/filters/AdvancedSearch'



const SidebarPanelMenu = ({filterType}) => {

  const filterComponents = {
    NearestDistance: NearestDistance,
    DistanceShipping: DistanceShipping,
    Make: Make,
    BodyType: BodyType,
    FuelType: FuelType,
    Year: Year,
    Price: Price,
    Mileage: Mileage,
    Features: Features,
    Drivetrian: Drivetrian,
    ExteriorColor: ExteriorColor,
    InteriorColor: InteriorColor,
    Transmission: Transmission,
    AdvancedSearch: AdvancedSearch
  };

  const FilterComponent = filterComponents[filterType] || null;

  return (
    <>
      {FilterComponent && <FilterComponent />}
    </>
  )
}

export default SidebarPanelMenu
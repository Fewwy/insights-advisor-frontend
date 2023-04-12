import React, { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';

const RecsList = lazy(() =>
  import(/* webpackChunkName: "RecsList" */ './SmartComponents/Recs/List')
);
const RecsDetails = lazy(() =>
  import(/* webpackChunkName: "RecsDetails" */ './SmartComponents/Recs/Details')
);
const DetailsPathways = lazy(() =>
  import(
    /* webpackChunkName: "Details-Pathways" */ './SmartComponents/Recs/DetailsPathways'
  )
);
const InventoryDetails = lazy(() =>
  import(
    /* InventoryDetails: "Details" */ './PresentationalComponents/Inventory/InventoryDetails'
  )
);
const SystemsList = lazy(() =>
  import(/* webpackChunkName: "List" */ './SmartComponents/Systems/List')
);
const TopicsList = lazy(() =>
  import(/* webpackChunkName: "TopicsList" */ './SmartComponents/Topics/List')
);
const TopicDetails = lazy(() =>
  import(
    /* webpackChunkName: "TopicDetails" */ './SmartComponents/Topics/Details'
  )
);
const TopicAdmin = lazy(() =>
  import(
    /* webpackChunkName: "TopicAdmin" */ './PresentationalComponents/TopicsAdminTable/TopicsAdminTable'
  )
);

export const AdvisorRoutes = () => (
  <Routes>
    <Route
      key={'Recommendations'}
      path="/recommendations"
      element={<RecsList />}
    ></Route>
    <Route
      key={'Recommendations Pathways'}
      path="/recommendations/pathways"
      element={<RecsList />}
    ></Route>
    <Route
      key={'Pathway details'}
      path="/recommendations/pathways/:id"
      element={<DetailsPathways />}
    ></Route>
    <Route
      key={'Pathway details'}
      path="/recommendations/pathways/systems/:id"
      element={<DetailsPathways />}
    ></Route>
    <Route
      key={'Recommendation details'}
      path="/recommendations/:id"
      element={<RecsDetails />}
    ></Route>
    <Route
      key={'Inventory details'}
      path="/recommendations/:id/:inventoryId/"
      element={<InventoryDetails />}
    ></Route>
    <Route
      key={'Inventory details'}
      path="/recommendations/pathways/:id/:inventoryId/"
      element={<InventoryDetails />}
    ></Route>
    <Route key={'Systems'} path="/systems" element={<SystemsList />}></Route>
    <Route
      key={'System detail'}
      path="/systems/:inventoryId/"
      element={<InventoryDetails />}
    ></Route>
    <Route key={'Topics'} path="/topics" element={<TopicsList />}></Route>
    <Route
      key={'Topic details'}
      path="/topics/:id"
      element={<TopicDetails />}
    ></Route>
    <Route
      key={'TopicAdmin'}
      path="/topics/admin/manage"
      element={<TopicAdmin />}
    ></Route>
  </Routes>
);

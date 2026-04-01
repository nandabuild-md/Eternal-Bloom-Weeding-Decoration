/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from '@/src/components/layout/Layout';
import { Home } from '@/src/pages/Home';
import { Planning } from '@/src/pages/Planning';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="planning" element={<Planning />} />
        </Route>
      </Routes>
    </Router>
  );
}

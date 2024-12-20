import { useContext } from "react";
import { ApiContext } from "../context/ApiContext";

import TermekekAdmin from "../components/admin/TermekekAdmin";
import UjTermek from "../components/admin/UjTermek";

function Admin() {
  const { apiData } = useContext(ApiContext);
  return (
    <main className="row g-5">
      <section>
        <h3>Új termék</h3>
        <UjTermek />
      </section>
      <article>
        {apiData ? <TermekekAdmin termekek={apiData} /> : "Nincs adat"}
      </article>
    </main>
  );
}
export default Admin;
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <div>로컬메뉴</div>
      <div>
        <h2> Outlet 자리 </h2>
        <div
          style={{
            backgroundColor: "yellowgreen",
            width: "50%",
            minHeight: 50,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: 50,
          }}
        >
          <Outlet />
        </div>
      </div>
    </div>
  );
}
export default Layout;

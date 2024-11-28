import homeImages from "../../../public/images/Home.png";
import pengajuanImages from "../../../public/images/Pengajuan.png";

function Sidebar() {
  return (
    <aside className="">
      <div className="w-42">
        <a href="/">
          <img src={homeImages} alt="Home" />
        </a>
      </div>
      <div className="w-42">
        <a href="/">
          <img src={pengajuanImages} alt="Pengajuan" />
        </a>
      </div>
    </aside>
  );
}

export default Sidebar;

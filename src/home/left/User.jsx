function User() {
  return (
    <div>
      <div className="flex space-x-4 px-6 py-7 hover:bg-slate-600 duration-300 cursor-pointer">
        <div className="avatar online">
          <div className="w-14 rounded-full">
            <img src="https://scontent.fcla7-1.fna.fbcdn.net/v/t39.30808-1/468282750_1962705027528779_8396273296158738054_n.jpg?stp=c7.348.1351.1352a_dst-jpg_s200x200_tt6&_nc_cat=105&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeFDfgoX4oPyxtclZ5IotalznkeF6HzUnuieR4XofNSe6IHUYRRoc0pIaVJXobXVsFP7ImpkvMKnSKLTle4LMiaV&_nc_ohc=EalEU_jdanQQ7kNvgH43k9n&_nc_zt=24&_nc_ht=scontent.fcla7-1.fna&_nc_gid=AK1WrxhC56MbjxaWr7Ps8aK&oh=00_AYDu2lUq4TNUZVl3wBMSQ2GA0U8SG4hSXt86GWszWhclkg&oe=67966ED1" />
          </div>
        </div>
        <div>
          <h1>Sohanur Rahman</h1>
          <span>sohan75632@gmail.com</span>
        </div>
      </div>
    </div>
  );
}
export default User;
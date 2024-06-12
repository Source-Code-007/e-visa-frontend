import { Input } from "antd";

const CheckPage = () => {
  return (
    <div className="py-6 pt-10">
      <div className="my-container">
        {/* Data */}
        <div className="w-5/6 xl:w-3/6 mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="font-bold text-white text-2xl  md:text-4xl">
            APPLICATION STATUS
          </h2>

<div className="space-y-2 w-full">
<div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">VISA APPLICATION STATUS</p>
              <Input value={"CONFIRMED"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Name:</p>
              <Input value={"MD AINUL"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">
                Date of your application status is:
              </p>
              <Input value={"13-05-2024 14:51:29"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Reference number:</p>
              <Input value={"02822697"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Passport country:</p>
              <Input value={"Bangladesh"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Passport type:</p>
              <Input value={"Ordinary"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Passport number:</p>
              <Input value={"A06513418"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Issue date of passport:</p>
              <Input value={"18-02-2023"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Expiration date of passport:</p>
              <Input value={"17-02-2033"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>

            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Visa validity period:</p>
              <Input
                value={"13-05-2024 - 11-07-2024"}
                className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
              />
            </div>
   
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Surname:</p>
              <Input value={"HAUQE"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Middle Name or Patronymic:</p>
              <Input value={""} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Birth Date:</p>
              <Input value={"24-10-1982"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Visa type:</p>
              <Input value={"Working visa"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Visa duration:</p>
              <Input value={"59"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
            <div className="flex flex-col gap-1">
              <p className="text-slate-100">Entry times:</p>
              <Input value={"SINGLE ENTRY"} className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium" />
            </div>
          </div>

</div>

         
        </div>

        <div className="flex items-center gap-4 justify-center mt-4">
              <button
              type="submit"
                className="my-3 bg-slate-800 font-bold text-primary-1 border border-white hover:bg-primary-1 hover:primary-1 hover:text-white p-2 !px-8 rounded-md shadow-md">
                Print
              </button>
              <button
              type="submit"
                className="my-3 bg-slate-800 font-bold text-primary-1 border border-white hover:bg-primary-1 hover:primary-1 hover:text-white p-2 !px-8 rounded-md shadow-md">
              Preview
              </button>
            </div>
      </div>
    </div>
  );
};

export default CheckPage;

import { Input } from "antd";
import { useGetSingleVisaQuery } from "../redux/api/visa/visaApi";
import { useSearchParams } from "react-router-dom";

const CheckPage = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const unikal_numb_query = searchParams.get("unikal_numb");
  const { data: visaData, isLoading: isLoadingVisa } =
    useGetSingleVisaQuery(unikal_numb_query);

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
                <Input
                  value={visaData?.data?.visaApplicationStatus}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Name:</p>
                <Input
                  value={visaData?.data?.name}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">
                  Date of your application status is:
                </p>
                <Input
                  value={visaData?.data?.applicationStatusDate}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Reference number:</p>
                <Input
                  value={visaData?.data?.referenceNumber}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Passport country:</p>
                <Input
                  value={visaData?.data?.passportCountry}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Passport type:</p>
                <Input
                  value={visaData?.data?.passportType}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Passport number:</p>
                <Input
                  value={visaData?.data?.passportNumber}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Issue date of passport:</p>
                <Input
                  value={visaData?.data?.passportIssueDate}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Expiration date of passport:</p>
                <Input
                  value={visaData?.data?.passportExpirationDate}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>

              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Visa validity period:</p>
                <Input
                  value={visaData?.data?.visaValidityPeriod}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Surname:</p>
                <Input
                  value={visaData?.data?.surname}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Middle Name or Patronymic:</p>
                <Input
                  value={visaData?.data?.middleNameOrPatronymic}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Birth Date:</p>
                <Input
                  value={visaData?.data?.birthDate}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Visa type:</p>
                <Input
                  value={visaData?.data?.visaType}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-12 md:gap-20 text-left">
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Visa duration:</p>
                <Input
                  value={visaData?.data?.visaDuration}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-slate-100">Entry times:</p>
                <Input
                  value={visaData?.data?.entryTimes}
                  className="bg-[#c2c2c2] pointer-events-none !rounded-sm !h-[34px] !font-medium"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4 justify-center mt-4">
          <button
            type="submit"
            className="my-3 bg-slate-800 font-bold text-primary-1 border border-white hover:bg-primary-1 hover:primary-1 hover:text-white p-2 !px-8 rounded-md shadow-md"
          >
            Print
          </button>
          <button
            type="submit"
            className="my-3 bg-slate-800 font-bold text-primary-1 border border-white hover:bg-primary-1 hover:primary-1 hover:text-white p-2 !px-8 rounded-md shadow-md"
          >
            Preview
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckPage;

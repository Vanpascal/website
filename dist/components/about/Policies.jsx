"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Policies;
const image_1 = __importDefault(require("next/image"));
const react_1 = __importDefault(require("react"));
const policies = [
    {
        title: "Environmental Protection and Health Safety Policies",
        purpose: "To encourage and maintain environmentally friendly practices among VTCs’ staff with a purpose of contributing towards sustainable preservation of the natural environmental order.",
        guidingPolicies: [
            "All members of management and staff have responsibility of taking care and protecting plants and vegetation.",
            "All employees shall honour and abide by the ‘no smoking’ principle within areas under VTCs jurisdiction.",
            "Avoid noise that may amount to unnecessary disturbance of others in the workplace.",
            "All environmental unfriendly materials be kept and disposed according to safety instructions attached to them.",
            "Non disposal of any material in places not specifically allocated for such purposes.",
            "Unless otherwise announced by the VTCs’ management, each employee shall grow at least one tree (to the height of at least three feet) in every two years of continued employment."
        ]
    },
    {
        title: "HIV/AIDS Policies",
        purpose: "To provide equal opportunity for people infected by HIV/AIDS to enjoy equal rights as those not infected and being taken care of as part of the VTCs’ community.",
        guidingPolicies: [
            "Employees’ rights to access information and education on HIV/AIDS shall be a basic right.",
            "Right to privacy and confidentiality regarding the HIV/AIDS status of job applicants and employees.",
            "Testing HIV/AIDS shall be voluntary for all employees.",
            "Disclosure of HIV/AIDS status shall be valued, but no employee shall be forced to disclose his/her status.",
            "No employees shall be terminated or stigmatized on basis of their HIV/AIDS status.",
            "Employees shall not be restrained from disclosing their HIV/AIDS status.",
            "VTCs shall regard sexual harassment (including forced sex) as a forced exposure to HIV/AIDS risk and thus treat it as a serious misconduct.",
            "VTCs management and employees shall have at least 3 hours’ event to commemorate the HIV/AIDS day every year."
        ]
    },
    {
        title: "Occupational Health and Workplace Safety Policies",
        purpose: "To place obligation on VTCs and their management to make sure that employees work under safe conditions and industrial safety regulations are respected.",
        guidingPolicies: [
            "Safety shall be a responsibility of all including both the management and employees.",
            "Investment priority shall be placed on safe technologies (for employees, beneficiaries, and communities).",
            "No employee shall be assigned to work in safety risky environments without training on the safety rules that govern operations use of the equipment used in his or her job.",
            "Having in place a fully functioning first aid kit shall be an obligation for all VTCs.",
            "There shall be continued fire detection and prevention measures in all places of the VTCs that shall be taken in consultation with employees.",
            "All foods formally consumed in the workplace shall be approved by a person responsible for assuring that such food staffs meet acceptable health safety standards.",
            "No person who in the view of the supervisor or unit head is impaired by alcohol or any illicit drug shall be allowed to operate a machine."
        ]
    }
];
function Policies() {
    return (<>
     <section className="relative">
            <div className="relative w-full h-80 md:h-[400px]">
              <image_1.default src="/images/about.jpg" alt="Motor Vehicle Mechanics Production Unit" fill style={{ objectFit: "cover" }}/>
            </div>
            <div className="absolute inset-0 flex flex-col space-y-5 items-center justify-center bg-black bg-opacity-50">
              <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
                Our Policies
              </h1>
            </div>
          </section>
    <div className="max-w-4xl mx-auto p-6">
      {policies.map((policy, index) => (<div key={index} className="mb-6 border-b pb-4">
          <h2 className="text-2xl font-semibold mb-2">{policy.title}</h2>
          <p className="mb-2 text-gray-700"><strong>Purpose:</strong> {policy.purpose}</p>
          <ul className="list-disc pl-5 text-gray-600">
            {policy.guidingPolicies.map((item, i) => (<li key={i}>{item}</li>))}
          </ul>
        </div>))}
    </div>
      </>);
}

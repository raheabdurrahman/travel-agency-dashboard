import {Header} from "../../../components";
import {ComboBoxComponent} from "@syncfusion/ej2-react-dropdowns";
import {comboBoxItems, selectItems} from "~/constants";
import {formatKey} from "~/lib/utils";
import {ButtonComponent} from "@syncfusion/ej2-react-buttons";


const CreateTrip = () => {
    const handleSubmit = async () => {};
    const handleChange = (key: keyof TripFormData, value: string | number) => {

    }

    return (
        <main className="flex flex-col gap-10 pb-20 wrapper">
            <Header title="Add a New Trip" description="View and edit AI-generated travel plans" />

            <section className="mt-2.5 wrapper-md">
                <form className="trip-form" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="country">
                            Country
                        </label>
                        <ComboBoxComponent
                            id="country"
                            dataSource={['bangladesh', 'India','Sri lanka', 'Indonesia', 'Saudi Arab', 'Malaysia', 'Thailand', 'Japan', 'Paris', 'Croatia']}
                            placeholder="Select a Country"
                            className="combo-box"
                            change={(e: {value: string | undefined}) => {

                                    if(e.value) {
                                        handleChange('country',e.value)
                                    }

                            }}
                            allowFiltering
                            filtering={(e)=>{
                                const query = e.text.toLowerCase();
                            }}
                        />
                    </div>

                    <div>
                        <label htmlFor="duration">Duration</label>
                        <input
                            id="duration"
                            name="duration"
                            type="number"
                            placeholder="Enter a number of days"
                            className="form-input placeholder:text-gray-100"
                            onChange={(e) => handleChange('duration', Number(e.target.value))}
                        />
                    </div>

                    {selectItems.map((key) =>(
                        <div key={key}>
                            <label htmlFor={key}>{formatKey(key)}</label>

                            <ComboBoxComponent
                                id={key}
                                dataSource={comboBoxItems[key].map((item) => ({
                                    text: item,
                                    value: item,
                                }))}
                                fields={{ text: 'text', value: 'value'}}
                                placeholder={`Select ${formatKey(key)}`}
                                change={(e: {value: string | undefined}) => {

                                    if(e.value) {
                                        handleChange(key,e.value)
                                    }

                                }}
                                allowFiltering
                                filtering={(e)=>{
                                    const query = e.text.toLowerCase();

                                    e.updateData(
                                        comboBoxItems[key]
                                            .filter((item) => item.toLowerCase().includes(query))
                                            .map(((item) => ({
                                                text: item,
                                                value: item,
                                            }))))}}

                                className="combo-box"

                            />
                        </div>
                    ))}

                    <div>
                        <label htmlFor="location">
                            Location on the world map
                        </label>
                    </div>
                    <footer className="px-6 w-full">
                        <ButtonComponent type="submit"
                            className="button-class !h-12 !w-full"
                        >
                            <img src={`/assets/icons/magic-star.svg`}/>
                            <span className="p-16-semibold text-white">
                                {'Genarate Trip'}
                            </span>
                        </ButtonComponent>

                    </footer>
                </form>
            </section>
        </main>
    )
}
export default CreateTrip


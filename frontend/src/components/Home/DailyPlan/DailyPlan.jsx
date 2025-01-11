import './DailyPlan.css'

export default function DailyPlan() {
    return (
        <>
            <div id='planContainer' >
                <p id='plan-header'>Meal Plan</p>
                <ul>
                    <li>
                        <p>Breakfast: Eggs</p>
                    </li>
                    <li>
                        <p>Snack 1: Fruit Salad</p>
                    </li>
                    <li>
                        <p>Lunch: Rice & Chicken</p>     
                    </li>
                    <li>
                        <p>Snack 2: Chips</p>
                    </li>
                    <li>
                        <p>Dinner: Chicken Tacos</p>
                    </li>
                </ul>
            </div>
        </>
    );
}  
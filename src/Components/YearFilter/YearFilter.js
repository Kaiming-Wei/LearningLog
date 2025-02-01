

const YearFilter = (props) => {
    const yearSelect = (e) => {
        props.onYearChange(+e.target.value);
    }
    return(
        <div>
            Year: 
            <select value={props.year} onChange={yearSelect}>
                <option value={2021}>2021</option>
                <option value={2022}>2022</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
            </select>
        </div>
    );
};

export default YearFilter;
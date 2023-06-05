const {useState, useEffect} = React;

const RootComponent = () => {
  return (
    <div className='container'>
      <BalanceComponent />
      <ExpensesComponent />
    </div>
  );
};

const BalanceComponent = () => {
  const balanceValue = 921.48;

  return (
    <div className='balance-container'>
      <div className='balance-text'>
        <p>My balance</p>
        <p>${balanceValue}</p>
      </div>
      <div className='circle-container'>
        <div className='circle circle-outline'></div>
        <div className='circle'></div>
      </div>
    </div>
  );
};

const ExpensesComponent = () => {
  const [expensesData, setExpensesData] = useState([]);

  const currentDate = new Date();
  const currentDay =
    currentDate.getDay() - 1 < 0 ? 6 : currentDate.getDay() - 1;

  useEffect(() => {
    fetch('./data.json')
      .then((response) => response.json())
      .then((data) => setExpensesData(data))
      .catch((error) => console.log(error));
  }, []);

  const totalExpenses =
    expensesData &&
    expensesData.reduce((total, item) => total + item.amount, 0);

  return (
    <div className='expenses-container'>
      <div className='expenses-title'>
        <p className='expenses-title-text'>Spending - Last 7 days</p>
        {expensesData.length && (
          <ChartComponent data={expensesData} currentDay={currentDay} />
        )}
      </div>
      <hr className='line' />
      <div className='summary-expenses'>
        <div className='month-expenses'>
          <p>Total this month</p>
          <p>${expensesData.length && totalExpenses}</p>
        </div>
        <div className='growth-expenses'>
          <p>+2.4%</p>
          <p>from last month</p>
        </div>
      </div>
    </div>
  );
};

const ChartComponent = ({data, currentDay}) => {
  const [enterMouseIndex, setEnterMouseIndex] = useState();

  return (
    <div className='chart'>
      {data.map((item, key) => (
        <div key={key} className='chart-bar-container'>
          <small
            className='tooltip-amount'
            style={{
              display: enterMouseIndex === key && 'flex',
            }}
          >
            ${item.amount}
          </small>
          <div
            className='chart-bar'
            onMouseEnter={() => setEnterMouseIndex(key)}
            onMouseLeave={() => setEnterMouseIndex()}
            style={{
              height: `${item.amount * 2}px`,
              backgroundColor: currentDay === key && 'hsl(186, 34%, 60%)',
            }}
          />
          <p className='chart-label'>{item.day}</p>
        </div>
      ))}
    </div>
  );
};

ReactDOM.render(<RootComponent />, document.getElementById('root'));

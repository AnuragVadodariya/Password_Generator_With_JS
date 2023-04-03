analysis: react-table package match over table use-cases on platform

- Links:
	- npm: https://www.npmjs.com/package/react-table
	- react-table v7: https://react-table-v7.tanstack.com/
	- react-table v8: https://tanstack.com/table/v8/?from=reactTableV7&original=https://react-table-v7.tanstack.com/
	- examples: https://tanstack.com/table/v8/docs/examples/react/basic
	- github v8: https://github.com/TanStack/table
	- git hub v7: https://github.com/tanstack/table/tree/v7

- In the ecosystem of table/datagrid libraries, there are two main categories:

	- Component-based table libraries (supply you with a feature-rich drop-in solution and ready-to-use components/markup complete with styles/theming.)
		- Link: https://ag-grid.com/react-data-grid/?utm_source=reacttable&utm_campaign=githubreacttable

	- Headless table libraries (supply you with functions, state, utilities and event listeners to build your own table markup or attach to existing table markups.)
		- Link: 

- Installation: npm install react-table --save or yarn add react-table

as per new UI: table ma kai vastu jose?

	- above filter mujab table na data change thava joi (top per filter chhe > like: PL, org type, org status, search org, etc.)
	- sorting ascending and descending (Eg. - org listing ma > org name table header)
	- select all nu checkbox jethi badha record select thai jai
	- after 25 records new API call lagvo joi with, plus one page
	- custom style add kari sakva joi package ma
	- dynamic header row show/hide thavi joi
	- if no data to body ma message dekhadi sakva joi

- favorite dynamic karvanu 

const withMonthlyPayments = (Component) => (props) => {
  const {
    values: {
      monthlyPayments: { [props.row]: rowData },
    },
  } = useFormikContext()
  const Error = useErrorService()
  const updateMonthlyPayments = async () => {
    try {
      let prepareData = {}
      for (const key in rowData) {
        prepareData = {
          ...prepareData,
          [key]: props.unmask ? props.unmask(rowData[key]) : rowData[key],
        }
      }
      await API.AdminAPI.enterpriseSOW.updateMonthlyPayments(props.companyId, {
        [props.row]: prepareData,
      })
    } catch (e) {
      Error.showError(e)
    }
  }
  return <Component {...props} updateMonthlyPayments={updateMonthlyPayments} />
}
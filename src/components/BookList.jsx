import { Component } from 'react'
import { forwardRef } from 'react'
import MaterialTable from "material-table"
import { connect } from 'react-redux'
import AddBox from "@material-ui/icons/AddBox"
import ArrowDownward from "@material-ui/icons/ArrowDownward"
import Check from "@material-ui/icons/Check"
import ChevronLeft from "@material-ui/icons/ChevronLeft"
import ChevronRight from "@material-ui/icons/ChevronRight"
import Clear from "@material-ui/icons/Clear"
import DeleteOutline from "@material-ui/icons/DeleteOutline"
import Edit from "@material-ui/icons/Edit"
import FilterList from "@material-ui/icons/FilterList"
import FirstPage from "@material-ui/icons/FirstPage"
import LastPage from "@material-ui/icons/LastPage"
import Remove from "@material-ui/icons/Remove"
import SaveAlt from "@material-ui/icons/SaveAlt"
import Search from "@material-ui/icons/Search"
import ViewColumn from "@material-ui/icons/ViewColumn"


const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
};

class BooksList extends Component {

  onSearchChange = (e) => {
    const { updateData, itemsPerPage, currentPage } = this.props;
    updateData({ page: currentPage, itemsPerPage, filters: e ? [{ type: "all", values: [e] }] : [] })
  }

  setCurrentPage = (page) => {
    const { updateData, itemsPerPage, filters } = this.props;
    updateData({ page: page + 1, itemsPerPage, filters })
  }

  render() {
    const { loading, data, totalCount, currentPage, itemsPerPage } = this.props

    const tableColumns = [
      { title: "Title", field: "book_title" },
      { title: "Author", field: "book_author" },
      { title: "Publication Year", field: "book_publication_year", type: 'numeric'},
      { title: "Publication Country", field: "book_publication_country" },
      { title: "Publication City", field: "book_publication_city" },
      { title: "Pages", field: "book_pages" },
    ];

    return (
        <MaterialTable
          title=""
          icons={tableIcons}
          isLoading={loading}
          columns={tableColumns}
          data={data}
          options={{
            headerStyle: {
              backgroundColor: '#3f51b5',
              color: '#FFF',
              fontWeight: 'bold',
            },
            search: true,
            pageSize: itemsPerPage,
            pageSizeOptions: [],
            sorting: true,
          }}
          page={currentPage - 1}
          totalCount={totalCount}
          onChangePage={this.setCurrentPage}
          onChangeRowsPerPage={this.setRowsPerPage}
          onSearchChange={this.onSearchChange}
        />
   
    )
  }
}

const mapStateToProps = state => state

export default connect(mapStateToProps, null)(BooksList);
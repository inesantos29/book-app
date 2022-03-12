import { useCallback, useEffect } from 'react'
import { connect } from 'react-redux'
import { postData } from '../api/books'
import  BookList from './BookList'

function BookEngine({ handleLoading, handleDataLoad, handleError }) {

  const loadData = useCallback(async ({ page, itemsPerPage, filters }) => {
    handleLoading(true)
    const response = await postData({ page: page || 1, itemsPerPage, filters })

    if (response.count || response.books) {
      updateUrl(page || 1)
      handleDataLoad({ ...response, page, filters })
    }
    else {
      handleError(response)
    }
  }, [handleDataLoad, handleError, handleLoading])

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search)
    const pageParam = queryParams.get("page")
    loadData({ page: pageParam || 1, itemsPerPage: 20, filters: [] })
  }, [loadData])

  function updateUrl(page) {
    const queryParams = new URLSearchParams(window.location.search)
    if (+page === 1) queryParams.delete("page")
    else queryParams.set("page", page)

    window.history.replaceState(null, null, queryParams.toString() ? "?" + queryParams.toString() : '/')
  }

  return <BookList updateData={loadData} />
}


const mapDispatchToProps = dispatch => {
  return {
    handleLoading: (isloading) => dispatch({ type: 'LOAD_DATA', payload: isloading }),
    handleDataLoad: (data) => dispatch({ type: 'SAVE_DATA', payload: data }),
    handleError: (error) => dispatch({ type: 'SHOW_ERROR', payload: error }),
  }
}

export default connect(null, mapDispatchToProps)(BookEngine)
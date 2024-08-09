import React from "react";
import {
  Table,
  TableBody,
  TableHeader,
  TableColumn,
  TableCell,
  TableRow,
  Pagination,
  Spinner,
  getKeyValue,
} from "@nextui-org/react";
import { PropTypes } from "prop-types";
import { useTableData } from "../hooks/useTableData";
import { useFindTableData } from "../hooks/useFindTableData";

function TableElement({ newValues, baseURL, headerVal, baseNavigate }) {
  const {
    data: generalData,
    columns,
    page: generalPage,
    setPage: setGeneralPage,
    totalPages: generalTotalPages,
    isLoading,
  } = useTableData(1, baseURL);

  const {
    data: filteredData,
    totalPages: filteredTotalPages,
    page: filteredPage,
    setPage: setFilteredPage,
  } = useFindTableData({ newValues }, 1);

  const searchParams = Object.values(newValues).some(
    (value) => value !== null && value !== ""
  );

  const displayData = Object.values(newValues).some(
    (value) => value !== null && value !== ""
  )
    ? filteredData
    : generalData;

  const currentPage = searchParams ? filteredPage : generalPage;
  const currentTotalPages = searchParams
    ? filteredTotalPages
    : generalTotalPages;

  const setCurrentPage = searchParams ? setFilteredPage : setGeneralPage;

  const handleEdit = (id, baseNavigate) => {
    window.open(`${baseNavigate}/${encodeURIComponent(id)}`, "target=_blank");
  };

  return (
    <>
      {filteredData.length === 0 ? (
        <div className="flex flex-col items-center justify-center m-20 gap-10">
          <div className="relative mx-6 w-32 h-32">
            <div className="absolute bottom-0 left-0 w-32 h-28 rounded-full bg-primary-900"></div>
            <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 overflow-hidden w-32 h-32 rounded-b-full">
              <div className="absolute bottom-[-0.3rem] left-1/2 transform -translate-x-1/2 w-24 h-32 border-4 border-primary-900 bg-white rounded-lg">
                <div className="relative mt-6">
                  {/* <div className="absolute top-0 mx-5 w-12 h-4">
                    <div className="absolute bottom-0.5 left-1.5 w-2.5 h-[1rem] rounded-full bg-primary-900 animate-animate-side-eye"></div>
                    <div className="absolute bottom-0.5 right-1.5 w-2.5 h-[1rem] rounded-full bg-primary-900 animate-side-eye"></div>
                  </div> */}
                  <div className="flex flex-row absolute top-0 mx-3 rounded-sm ">
                    {/* /\/\/\/\ */}
                    <div className="flex flex-row  bottom-0.5  animate-side-eye">
                      <div className=" tranform -rotate-45  w-4 h-1 bg-primary-900 translate-x-1/2"></div>
                      <div className=" tranform rotate-45  w-4 h-1 bg-primary-900 -translate-x-1/2"></div>
                    </div>
                    <div className="flex flex-row bottom-0.5  animate-side-eye">
                      <div className=" tranform -rotate-45  w-4 h-1 bg-primary-900 translate-x-1/2"></div>
                      <div className=" tranform rotate-45  w-4 h-1 bg-primary-900 -translate-x-1/2"></div>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 w-4 h-1 bg-secondary rounded-full animate-cheek"></div>
                  <div className="absolute top-4 right-4 w-4 h-1 bg-secondary rounded-full animate-cheek"></div>
                  <div className="flex flex-row absolute top-9 mx-5 h-4 items-end">
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[-45deg]"></div>
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[45deg]"></div>
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[-45deg]"></div>
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[45deg]"></div>
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[-45deg]"></div>
                    <div className="w-2 h-1.5 bg-primary-900 skew-y-[45deg]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h1 className="font-light text-2xl text-primary-500 ">
            一致する値が見つかりませんでした。もう一度お試しください。
          </h1>
        </div>
      ) : (
        <Table
          aria-label="Data Table"
          color="primary"
          shadow="none"
          isHeaderSticky
          selectionBehavior="replace"
          selectionMode="single"
          onRowAction={(key) => {
            handleEdit(key, baseNavigate);
          }}
          removeWrapper
          bottomContent={
            currentTotalPages > 0 ? (
              <div
                className="flex w-full justify-center sticky bottom-3 left-0
               "
              >
                <Pagination
                  isCompact
                  showControls
                  showShadow
                  color="primary"
                  page={currentPage}
                  total={currentTotalPages}
                  onChange={setCurrentPage}
                />
              </div>
            ) : null
          }
          classNames={{
            base: "max-h-[65vh] overflow-scroll my-5 mx-0 px-10 ",
            table: "min-h-[400px] my-5 text-sm",
          }}
        >
          <TableHeader>
            {columns.length > 0 ? (
              headerVal.map((value) => (
                <TableColumn key={value.name} className="whitespace-nowrap">
                  {value.label}
                </TableColumn>
              ))
            ) : (
              <TableColumn></TableColumn>
            )}
          </TableHeader>

          {isLoading ? (
            <TableBody
              emptyContent={"Loading Data"}
              loadingContent={<Spinner />}
              loadingState="loading"
            />
          ) : (
            <TableBody>
              {displayData.map((item) => (
                <TableRow
                  key={item.id}
                  className="whitespace-nowrap border-b-2"
                  // onClick={onOpen}
                >
                  {headerVal.map((header) => (
                    <TableCell
                      key={header.name}
                      className="whitespace-nowrap px-2 py-5"
                    >
                      {getKeyValue(item.data[header.label], item.id)}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      )}
    </>
  );
}

TableElement.propTypes = {
  newValues: PropTypes.object.isRequired,
  baseURL: PropTypes.string.isRequired,
  headerVal: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  baseNavigate: PropTypes.string.isRequired,
};

export default React.memo(TableElement);

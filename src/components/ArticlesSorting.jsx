import Stack from "@mui/material/Stack";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

function ArticlesSorting({
  searchParams,
  setSearchParams,
  queries,
  setQueries,
}) {
  function handleQuery(event, newSortQuery) {
    if (newSortQuery !== null) {
      setQueries((current) => {
        return { ...current, sort_by: newSortQuery };
      });
    }
  }

  function handleDirection(event, newSortDirection) {
    if (newSortDirection !== null) {
      setQueries((current) => {
        return { ...current, order: newSortDirection };
      });
    }
  }

  function handleSubmit() {
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", queries.sort_by);
    newParams.set("order", queries.order);
    setSearchParams(newParams);
  }

  return (
    <Stack direction="row" spacing={3} className="sorting-container">
      <ToggleButtonGroup
        value={queries.sort_by}
        exclusive
        onChange={handleQuery}
      >
        <ToggleButton value="created_at">Date</ToggleButton>
        <ToggleButton value="comment_count">Comment count</ToggleButton>
        <ToggleButton value="votes">Votes</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup
        value={queries.order}
        exclusive
        onChange={handleDirection}
      >
        <ToggleButton value="desc">Desc</ToggleButton>
        <ToggleButton value="asc">Asc</ToggleButton>
      </ToggleButtonGroup>

      <ToggleButtonGroup>
        <ToggleButton onClick={handleSubmit}>Sort</ToggleButton>
      </ToggleButtonGroup>
    </Stack>
  );
}

export default ArticlesSorting;

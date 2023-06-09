// =================================================================================
// Code generated by GoFrame CLI tool. DO NOT EDIT.
// =================================================================================

package do

import (
	"github.com/gogf/gf/v2/frame/g"
	"github.com/gogf/gf/v2/os/gtime"
)

// Promptlike is the golang structure of table promptlike for DAO operations like Where/Data.
type Promptlike struct {
	g.Meta     `orm:"table:promptlike, do:true"`
	Id         interface{} // pk
	Uid        interface{} // User ID
	Pid        interface{} // Prompt ID
	Like       interface{} // User like(1) or dislike(-1) prompt
	CreateTime *gtime.Time // Created Time
	UpdateTime *gtime.Time // Updated Time
}
